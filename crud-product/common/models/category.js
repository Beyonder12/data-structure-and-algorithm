//import
const async = require("async");
const validate = require("validate.js");
const crypto = require("crypto-js");
const path = require('path');
const ejs = require("ejs");
const fs = require('fs');
const utils = require('../config/utils');
// const constants = require('../config/constants');
const config = require('../config');
const requestAgent = require('../config/request');
// const { RateLimiterRedis } = require('rate-limiter-flexible');
const moment = require('moment-timezone');
const { create } = require("domain");
const { settings } = require("cluster");
const { errorMonitor } = require("events");
//fungsi utama
module.exports = function(Category) {

  Category.addBook = async function (data, options) {
    try {

      
      const { TxRetur, Account } = Category.app.models;

      const token = options && options.accessToken;
      if(!token) {
        const error = new Error ("Please login to access this feature!");
        error.statusCode = 401;
        throw error;
      };
      const userId = token && token.userId;
      if(!userId) {
        const error = new Error ("Where do you get authentication?");
        error.statusCode = 401;
        throw error;
      };
      var account = await Account.findById(userId);
      if (!account) {
        const error = new Error("Account not found!");
        error.statusCode = 404;
        throw error;
      }

      var constraints = {
        name : {presence: true}
      }

      var validation = validate(data, constraints);
      if (validation) {
        const error = new Error("Error Validation!");
        error.statusCode = 412;
        error.message = validation;
        throw error;
      }

      console.log(account)
      const todayMomentJkt = moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss");
      data['code'] = Math.floor(Math.random()*1000)
      data['createdId'] = userId;
      data['createdName'] = account['name'] || account['email'];
      data['cretedDate'] = new Date(todayMomentJkt);
      data['type'] = 'book';
      
      var txRetur = await TxRetur.create(data);
      var category = await Category.create(data);
      return Promise.resolve({status: "succesfully hit API!", txRetur: txRetur, category: category});

    } catch (err) {
      return Promise.reject(err);
    }
  };

  Category.remoteMethod("addBook", {
    description: ["add item category book"],
    accepts: [
      {arg: "data", type: "object", http: { source: 'body' }, required: true, description: "data" },
      {arg: "options", type: "object", http: "optionsFromRequest"},
    ],
    returns: {
      arg: "status", type: "object", root: true, description: "Return value"
    },
    http: {verb: "post"}
  });

  Category.getListBook = async function (filter, skip, limit, sort, options) {
    // payload : {placeId:"string", search:"string", status: "string", dateStart: "date", dateEnd: "date"}

    try {

      // #1 Pipeline MongoDB Technique
      const { connector, ObjectID } = Category.getDataSource();
      // const $$placeId = ObjectID(filter['placeId']);
      const itemCollection = connector.collection('Category');
      const itemCursor = await itemCollection.aggregate([
        {
          $match: {
            type: 'book'
          }
        },
        {
          $project: {
            _id: 0,
            name: 1,
          }
        }

      ],)
      var results = await itemCursor.toArray();//list data

      // #2 Loopback technique
      var totalData = await Category.find(); // list data

      return Promise.resolve({status: "Hit API successfully!", count: results.length, totalData: totalData.length, data: results});
    } catch (err) {
      return Promise.reject(err);
    }
  };

  Category.remoteMethod("getListBook", {
    description: ["get list of book category"],
    accepts: [

      { arg: "filter", type: "object", required: true, description: "filter" },
      { arg: "skip", type: "number", required: false, description: "skip" },
      { arg: "limit", type: "number", required: false, description: "limit" },
      { arg: "sort", type: "string", required: false, description: "sort" },
      { arg: "options", type: "object", http: "optionsFromRequest"},
    ],
    returns: {
      arg: "status", type: "object", root: true, description: "Return value"
    },
    http: {verb: "get"}
  });


  Category.disableRemoteMethodByName("create", true);
  Category.disableRemoteMethodByName("upsert", true);
  Category.disableRemoteMethodByName("updateAll", true);
  Category.disableRemoteMethodByName("updateAttributes", true);
  Category.disableRemoteMethodByName("find", true);
  Category.disableRemoteMethodByName("findById", true);
  Category.disableRemoteMethodByName("findOne", true);
  Category.disableRemoteMethodByName("deleteById", true);
  Category.disableRemoteMethodByName("confirm", true);
  Category.disableRemoteMethodByName("count", true);
  Category.disableRemoteMethodByName("exists", true);
  Category.disableRemoteMethodByName("resetPassword", true);
  Category.disableRemoteMethodByName('replaceOrCreate', true);
  Category.disableRemoteMethodByName('replaceById', true);
  Category.disableRemoteMethodByName('createChangeStream', true);

}