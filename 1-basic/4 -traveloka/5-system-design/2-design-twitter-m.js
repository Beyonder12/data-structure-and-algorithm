var Twitter = function() {
  this.followMap = {}; //userId => [followeeId, ...]
  this.tweetMap = {}; //userId => [tweetId, ...]

  this.time = 0;
  this.tweetTimeMap = {}; // tweetId => postTime

  this.newArrayForKey = function(map, key) {
    if(!map[key])
      map[key] = [];
  }
};

Twitter.prototype.postTweet = function(userId, tweetId) {
  this.newArrayForKey(this.tweetMap, userId);

  if(this.tweetMap[userId].indexOf(tweetId) === -1) {
    this.tweetMap[userId].push(tweetId);
    this.tweetTimeMap[tweetId] = this.time ++;
  }
}

Twitter.prototype.getNewsFeed = function(userId) {
  var list = [];

  if(this.tweetMap[userId])
    list = list.concat(this.tweetmap[userId]);
  for(var followeeKey in this.followMap[userId]) {
    var followeeId = this.followMap[userId][followeeKey];

    if(followeeId != userId && this.tweetMap[followeeId])
      list = list.concat(this.tweetMap[followeeId]);
  }

  that = this;
  return list.sort(function (a, b) {
    return that.tweetTimeMap[b] - that.tweetTimeMap[a];
  }).slice(0,10);
}

Twitter.prototype.follow = function(followerId, followeeId) {
  this.newArrayForKey(this.followMap, followerId);

  if(this.followMap[followerId].indexOf(followeeId) === -1)
    this.followMap[followerId].push(followeeId);
}

Twitter.prototype.unfollow = function(followerId, followeeId) {
  this.newArrayForKey(this.followMap, followerId);

  var index = this.followMap[followerId].indexOf(followeeId);
  if(index !== -1)
    this.followMap[followerId].spice(index, 1)
}
