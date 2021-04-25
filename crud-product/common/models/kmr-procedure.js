const async = require("async");
const constants = require('../config/constants');
const utils = require('../config/utils');

function roundToNearest100(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if ((number % 100) !== 0) {
    return Math.ceil(number / 100) * 100;
  }

  return number;
}

module.exports = function(KMrProcedure) {

  // DEPRECATED
  KMrProcedure.newPostProcedureDetailDEPRECATED = async function(req, data) {
    try {
      let updaterUserId;
      if (!req.accessToken && !req.accessToken.userId){
        error = new Error("token is expired, please re-login");
        error.status = 401;
        throw error;
      } else {
        updaterUserId = req.accessToken.userId;
      }

      const { KProcedure, KAKHPStock, KStockDepot, KTxItem } = KMrProcedure.app.models;

      let isDataArray = Array.isArray(data);
      let dataMrProcedure;
      let countCreateProcedure = 0;

      if (!isDataArray) {
        dataMrProcedure = [];
        dataMrProcedure.push(data);
      } else {
        dataMrProcedure = data;
      }
      const dataMrProcedureLength = dataMrProcedure.length;

      for (let i = 0; i < dataMrProcedureLength; i++) {
        const selectedProcedure = dataMrProcedure[i];

        if (!selectedProcedure['isDb'] && typeof selectedProcedure.bpjsProcedure === 'undefined') {
          const itemsUsedLength = selectedProcedure.itemsUsed.length;
          const formattedItemsUsed = [];

          const countUsage = {
            usageDetail: [],
          };

          for (let $i = 0; $i < itemsUsedLength; $i++) {
            const selectedItemUsed = selectedProcedure.itemsUsed[$i];

            let itemInstance;
            if (typeof selectedItemUsed.akhpId !== 'undefined') {
              itemInstance = await KAKHPStock.findById(selectedItemUsed.akhpId);
              selectedProcedure.itemsUsed[$i].stockTotal = itemInstance.stockTotal;

              const data = {
                id: selectedItemUsed.akhpId,
                akhpId: selectedItemUsed.akhpId,
                itemName: selectedItemUsed.itemName,
                quantity: selectedItemUsed.quantity,
                quantityUsed: selectedItemUsed.quantityUsed,
                buyFee: selectedItemUsed.buyFee,
                dosage: selectedItemUsed.dosage,
                unit: selectedItemUsed.unit,
                isOneTimeUseOnly: selectedItemUsed.isOneTimeUseOnly,
                sellNormalFee: selectedItemUsed.sellNormalFee,
                stockTotal: selectedItemUsed.stockTotal,
                DepotStocks: selectedItemUsed.depot,
                dataDepot: selectedItemUsed.depot,
                isDepotError: selectedItemUsed.isDepotError,
                isDepotErrorMessage: selectedItemUsed.isDepotErrorMessage,
                depotId: selectedItemUsed.depotId,
                depotIdTemp: selectedItemUsed.depotIdTemp,
                stockTotal: itemInstance.stockTotal,
              };

              if (!selectedItemUsed.isOneTimeUseOnly) {
                const stockInstance = await KStockDepot.findById(selectedItemUsed.depotId);

                const usageData = {
                  oldStockState: {
                    isFirstTime: stockInstance.isFirstTime,
                    isRunOut: stockInstance.isRunOut,
                    usedItemLabel: stockInstance.usedItemLabel,
                    usedItemPercentage: stockInstance.usedItemPercentage,
                  },
                  isTotal: false,
                  isFromProcedure: true,
                  usage: selectedItemUsed.quantity,
                  personInCharge: selectedProcedure.createdName,
                  createdId: selectedProcedure.createdId,
                  createdAt: selectedProcedure.createdAt,
                  depotId: selectedItemUsed.depotId,
                  akhpId: selectedItemUsed.akhpId,
                  mrId: selectedProcedure.mrId,
                  isRunOut: selectedItemUsed.isRunOut || false,
                  usedItemPercentage: stockInstance.usedItemPercentage,
                  usedItemLabel: stockInstance.usedItemLabel,
                  countOpened: 0,
                  queueNumber: 0,
                };

                if (stockInstance.isFirstTime || stockInstance.isRunOut) {
                  usageData.countOpened += 1;
                  usageData.queueNumber += 1;
                  stockInstance.countOpened += 1;

                  // Automatically set it to 100 percent;
                  stockInstance.usedItemPercentage = 100;
                  usageData.usedItemPercentage = 100;

                  let usedItemLabelNumber = stockInstance.countOpened;
                  let isLoop = true;
                  let usedItemLabel = '';
                  while (isLoop) {
                    console.log('loop useditemlabel');
                    usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                    const $idx = stockInstance.countUsage
                      .findIndex($item => $item.usedItemLabel === usedItemLabel);

                    if ($idx === -1) {
                      isLoop = false;
                    } else {
                      usedItemLabelNumber++;
                    }
                  }
                  stockInstance.usedItemLabel = usedItemLabel;
                  usageData.usedItemLabel = usedItemLabel;

                  stockInstance.isFirstTime = false;
                } else {
                  const filteredCountUsages = stockInstance.countUsage
                    .filter(($item) => {
                      return $item.akhpId === usageData.akhpId &&
                        $item.usedItemLabel === usageData.usedItemLabel &&
                        $item.isTotal === false;
                    });
                  const maxQueueNumber = Math.max.apply(
                    Math,
                    filteredCountUsages.map($item => $item.queueNumber),
                  );

                  if (!isFinite(maxQueueNumber)) {
                    // Probably this will the the first of the new count usage
                    // so we set it with default 1
                    usageData.queueNumber = 1;
                  } else {
                    usageData.queueNumber = maxQueueNumber + 1;
                  }
                }

                if (selectedItemUsed.isRunOut) {
                  stockInstance.isRunOut = false;

                  const usedQuantityDifference = selectedItemUsed.quantity - selectedItemUsed.quantityUsed;
                  if (usedQuantityDifference === 0) {
                    // our assumption here is that user used all remaining percentage
                    // then set isRunOut to true
                    usageData.countOpened += 1;

                    stockInstance.countOpened += 1;
                    stockInstance.stock -= 1;

                    const stockTotalAKHP = itemInstance.stockTotal - 1;
                    await KAKHPStock.updateAll(
                      { id: selectedItemUsed.akhpId },
                      { stockTotal: stockTotalAKHP },
                    );

                    usageData.effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                    data.effectedKtxItemId = usageData.effectedKtxItemId;

                    // Automatically set it to 100 percent;
                    stockInstance.usedItemPercentage = 100;

                    let usedItemLabelNumber = stockInstance.countOpened;
                    let isLoop = true;
                    let usedItemLabel = '';
                    while (isLoop) {
                      console.log('loop useditemlabel');
                      usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                      const $idx = stockInstance.countUsage
                        .findIndex($item => $item.usedItemLabel === usedItemLabel);

                      if ($idx === -1) {
                        isLoop = false;
                      } else {
                        usedItemLabelNumber++;
                      }
                    }
                    stockInstance.usedItemLabel = usedItemLabel;

                    const countUsageByItemLabel = stockInstance.countUsage
                      .filter($item => $item.usedItemLabel === usageData.usedItemLabel);

                    const totalUsage = {
                      isTotal: true,
                      usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageData.usage,
                      personInCharge: usageData.personInCharge,
                      depotId: selectedItemUsed.depotId,
                      akhpId: selectedItemUsed.akhpId,
                      mrId: selectedProcedure.mrId,
                      countOpened: countUsageByItemLabel
                        .reduce((a, b) => a + b.countOpened, 0) + usageData.countOpened,
                      usedItemPercentage: usageData.usedItemPercentage,
                      usedItemLabel: usageData.usedItemLabel,
                      isRunOut: true,
                      createdId: selectedProcedure.createdId,
                      createdAt: selectedProcedure.createdAt,
                    };

                    const usageData1 = await stockInstance.CountUsages.create(usageData);
                    usageData.relationId = usageData1.id;
                    const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                    usageData.idTotalUsage = totalUsageData.id;

                    const average = itemInstance.buyFee / totalUsage.usage;
                    stockInstance.averagePrice = average;
                    stockInstance.averageUsage = totalUsage.usage;

                    // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                    // await KAKHPStock.updateAll(
                    //   { id: selectedItemUsed.akhpId },
                    //   {
                    //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                    //   },
                    // );

                    countUsage.usageDetail.push(usageData);
                  } else if (usedQuantityDifference > 0 && usedQuantityDifference < selectedItemUsed.quantity) {
                    // our assumption here is that user used some of the remaining percentage
                    // then proceed to open a new bottle (any unit), use it and set isRunOut to true
                    const usageDataBeforeRunOut = Object.assign({}, usageData);
                    usageDataBeforeRunOut.usage = selectedItemUsed.quantityUsed;
                    const usageDataAfterRunOut = Object.assign({}, usageData);
                    usageDataAfterRunOut.usage = usedQuantityDifference;

                    usageDataAfterRunOut.countOpened += 1;
                    usageDataAfterRunOut.queueNumber = 1;

                    stockInstance.countOpened += 1;
                    stockInstance.stock -= 1;

                    // Automatically set it to 100 percent;
                    stockInstance.usedItemPercentage = 100;
                    usageDataAfterRunOut.usedItemPercentage = 100;

                    let usedItemLabelNumber = stockInstance.countOpened;
                    let isLoop = true;
                    let usedItemLabel = '';
                    while (isLoop) {
                      console.log('loop useditemlabel');
                      usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                      const $idx = stockInstance.countUsage
                        .findIndex($item => $item.usedItemLabel === usedItemLabel);

                      if ($idx === -1) {
                        isLoop = false;
                      } else {
                        usedItemLabelNumber++;
                      }
                    }

                    stockInstance.usedItemLabel = usedItemLabel;
                    usageDataAfterRunOut.usedItemLabel = usedItemLabel;

                    const stockTotalAKHP = itemInstance.stockTotal - 1;
                    await KAKHPStock.updateAll(
                      { id: selectedItemUsed.akhpId },
                      { stockTotal: stockTotalAKHP },
                    );

                    usageData.effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                    data.effectedKtxItemId = usageData.effectedKtxItemId;

                    const countUsageByItemLabel = stockInstance.countUsage
                      .filter($item => $item.usedItemLabel === usageDataBeforeRunOut.usedItemLabel);

                    const totalUsage = {
                      isTotal: true,
                      usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageDataBeforeRunOut.usage,
                      personInCharge: usageDataBeforeRunOut.personInCharge,
                      depotId: selectedItemUsed.depotId,
                      akhpId: selectedItemUsed.akhpId,
                      mrId: selectedProcedure.mrId,
                      countOpened: countUsageByItemLabel
                        .reduce((a, b) => a + b.countOpened, 0) + usageDataBeforeRunOut.countOpened,
                      usedItemPercentage: usageDataBeforeRunOut.usedItemPercentage,
                      usedItemLabel: usageDataBeforeRunOut.usedItemLabel,
                      isRunOut: true,
                      createdId: selectedProcedure.createdId,
                      createdAt: selectedProcedure.createdAt,
                    };

                    const usageData1 = await stockInstance.CountUsages.create(usageDataBeforeRunOut);
                    usageDataBeforeRunOut.relationId = usageData1.id;
                    const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                    usageDataBeforeRunOut.idTotalUsage = totalUsageData.id;
                    const usageData2 = await stockInstance.CountUsages.create(usageDataAfterRunOut);
                    usageDataAfterRunOut.relationId = usageData2.id;

                    const average = itemInstance.buyFee / totalUsage.usage;
                    stockInstance.averagePrice = average;
                    stockInstance.averageUsage = totalUsage.usage;

                    // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                    // await KAKHPStock.updateAll(
                    //   { id: selectedItemUsed.akhpId },
                    //   {
                    //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                    //   },
                    // );

                    countUsage.usageDetail.push(usageDataBeforeRunOut);
                    countUsage.usageDetail.push(usageDataAfterRunOut);
                  } else if (usedQuantityDifference === selectedItemUsed.quantity) {
                    // our assumption here is that user don't have any usage left
                    // so we get totalUsage first, open another bottle (any unit)
                    // then set isRunOut to true
                    const countUsageByItemLabel = stockInstance.countUsage
                      .filter($item => $item.usedItemLabel === usageData.usedItemLabel);

                    const totalUsage = {
                      isTotal: true,
                      usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageData.usage,
                      personInCharge: usageData.personInCharge,
                      depotId: selectedItemUsed.depotId,
                      akhpId: selectedItemUsed.akhpId,
                      mrId: selectedProcedure.mrId,
                      countOpened: countUsageByItemLabel
                        .reduce((a, b) => a + b.countOpened, 0) + usageData.countOpened,
                      usedItemPercentage: usageData.usedItemPercentage,
                      usedItemLabel: usageData.usedItemLabel,
                      isRunOut: true,
                      createdId: selectedProcedure.createdId,
                      createdAt: selectedProcedure.createdAt,
                    };

                    usageData.countOpened += 1;
                    usageData.queueNumber = 1;

                    stockInstance.countOpened += 1;
                    stockInstance.stock -= 1;

                    // Automatically set it to 100 percent;
                    stockInstance.usedItemPercentage = 100;
                    usageData.usedItemPercentage = 100;

                    let usedItemLabelNumber = stockInstance.countOpened;
                    let isLoop = true;
                    let usedItemLabel = '';
                    while (isLoop) {
                      console.log('loop useditemlabel');
                      usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                      const $idx = stockInstance.countUsage
                        .findIndex($item => $item.usedItemLabel === usedItemLabel);

                      if ($idx === -1) {
                        isLoop = false;
                      } else {
                        usedItemLabelNumber++;
                      }
                    }

                    stockInstance.usedItemLabel = usedItemLabel;
                    usageData.usedItemLabel = usedItemLabel;

                    const stockTotalAKHP = itemInstance.stockTotal - 1;
                    await KAKHPStock.updateAll(
                      { id: selectedItemUsed.akhpId },
                      { stockTotal: stockTotalAKHP },
                    );

                    usageData.effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                    data.effectedKtxItemId = usageData.effectedKtxItemId;

                    const average = itemInstance.buyFee / totalUsage.usage;
                    stockInstance.averagePrice = average;
                    stockInstance.averageUsage = totalUsage.usage;

                    // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                    // await KAKHPStock.updateAll(
                    //   { id: selectedItemUsed.akhpId },
                    //   {
                    //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                    //   },
                    // );

                    const usageData1 = await stockInstance.CountUsages.create(usageData);
                    usageData.relationId = usageData1.id;
                    const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                    usageData.idTotalUsage = totalUsageData.id;

                    countUsage.usageDetail.push(usageData);
                  }
                } else {
                  stockInstance.isRunOut = false;
                  const usageData1 = await stockInstance.CountUsages.create(usageData);
                  usageData.relationId = usageData1.id;
                  countUsage.usageDetail.push(usageData);
                }

                await stockInstance.save();
              } else {
                const stockInstance = await KStockDepot.findById(selectedItemUsed.depotId, {
                  fields: ['stock'],
                });
                await KStockDepot.updateAll(
                  { id: selectedItemUsed.depotId },
                  { stock: stockInstance.stock - selectedItemUsed.quantity },
                );

                const akhpInstance = await KAKHPStock.findById(selectedItemUsed.akhpId, {
                  fields: ['stockTotal'],
                });
                await KAKHPStock.updateAll(
                  { id: selectedItemUsed.akhpId },
                  { stockTotal: akhpInstance.stockTotal - selectedItemUsed.quantity },
                );

                data.effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, data);
              }

              formattedItemsUsed.push(data);
            }
          }

          dataMrProcedure[i].countUsage = countUsage;

          const dataProcedure = {
            name : selectedProcedure['procedureName'],
            basicFee : selectedProcedure['basicFee'],
            doctorFee : selectedProcedure['doctorFee'],
            totalFee : selectedProcedure['totalFee'],
            note : selectedProcedure['note'],
            itemsUsed: formattedItemsUsed,
            practiceId : [selectedProcedure['practiceId']],
            hospitalId : selectedProcedure['hospitalId'],
            isPriceLock: selectedProcedure['isPriceLock'],
            createdAt : new Date(),
            createdName : selectedProcedure['createdName'],
            createdId : selectedProcedure['createdId']
          };

          // console.log("proc "+JSON.stringify(dataProcedure));
          const procedure = await KProcedure.create(dataProcedure);
          dataMrProcedure[i]['procedureId'] = procedure['id'];
          countCreateProcedure++;
        } else {
          // handle itemsUsed
          // const procedureInstance = await KProcedure.findById(selectedProcedure.procedureId);
          // loop through itemsUsed payload from selectedProcedure variable
          if (typeof selectedProcedure.bpjsProcedure === 'undefined') {
            const countUsage = {
              usageDetail: [],
            };

            const itemsUsedLength = selectedProcedure.itemsUsed.length;
            for (let z = 0; z < itemsUsedLength; z++) {
              const selectedItemUsed = selectedProcedure.itemsUsed[z];

              if (typeof selectedItemUsed.akhpId !== 'undefined') {
                const itemInstance = await KAKHPStock.findById(selectedItemUsed.akhpId);
                selectedProcedure.itemsUsed[z].stockTotal = itemInstance.stockTotal;

                if (!itemInstance.isOneTimeUseOnly) {
                  const stockInstance = await KStockDepot.findById(selectedItemUsed.depotId);

                  const usageData = {
                    oldStockState: {
                      isFirstTime: stockInstance.isFirstTime,
                      isRunOut: stockInstance.isRunOut,
                      usedItemLabel: stockInstance.usedItemLabel,
                      usedItemPercentage: stockInstance.usedItemPercentage,
                    },
                    isTotal: false,
                    isFromProcedure: true,
                    usage: selectedItemUsed.quantity,
                    personInCharge: selectedProcedure.createdName,
                    createdId: selectedProcedure.createdId,
                    createdAt: selectedProcedure.createdAt,
                    depotId: selectedItemUsed.depotId,
                    akhpId: selectedItemUsed.akhpId,
                    mrId: selectedProcedure.mrId,
                    isRunOut: false,
                    usedItemPercentage: stockInstance.usedItemPercentage,
                    usedItemLabel: stockInstance.usedItemLabel,
                    countOpened: 0,
                    queueNumber: 0,
                  };

                  if (stockInstance.isFirstTime || stockInstance.isRunOut) {
                    usageData.countOpened += 1;
                    usageData.queueNumber += 1;
                    stockInstance.countOpened += 1;

                    // Automatically set it to 100 percent;
                    stockInstance.usedItemPercentage = 100;
                    usageData.usedItemPercentage = 100;

                    let usedItemLabelNumber = stockInstance.countOpened;
                    let isLoop = true;
                    let usedItemLabel = '';
                    while (isLoop) {
                      console.log('loop useditemlabel');
                      usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                      const $idx = stockInstance.countUsage
                        .findIndex($item => $item.usedItemLabel === usedItemLabel);

                      if ($idx === -1) {
                        isLoop = false;
                      } else {
                        usedItemLabelNumber++;
                      }
                    }
                    stockInstance.usedItemLabel = usedItemLabel;
                    usageData.usedItemLabel = usedItemLabel;

                    stockInstance.isFirstTime = false;
                  } else {
                    const filteredCountUsages = stockInstance.countUsage
                      .filter(($item) => {
                        return $item.akhpId === usageData.akhpId &&
                          $item.usedItemLabel === usageData.usedItemLabel &&
                          $item.isTotal === false;
                      });
                    const maxQueueNumber = Math.max.apply(
                      Math,
                      filteredCountUsages.map($item => $item.queueNumber),
                    );

                    if (!isFinite(maxQueueNumber)) {
                      // Probably this will the the first of the new count usage
                      // so we set it with default 1
                      usageData.queueNumber = 1;
                    } else {
                      usageData.queueNumber = maxQueueNumber + 1;
                    }
                  }

                  if (selectedItemUsed.isRunOut) {
                    stockInstance.isRunOut = false;

                    const usedQuantityDifference = selectedItemUsed.quantity - selectedItemUsed.quantityUsed;
                    if (usedQuantityDifference === 0) {
                      // our assumption here is that user used all remaining percentage
                      // then set isRunOut to true
                      usageData.countOpened += 1;
                      usageData.isRunOut = true;

                      stockInstance.countOpened += 1;
                      stockInstance.stock -= 1;

                      const stockTotalAKHP = itemInstance.stockTotal - 1;
                      await KAKHPStock.updateAll(
                        { id: selectedItemUsed.akhpId },
                        { stockTotal: stockTotalAKHP },
                      );

                      selectedProcedure.itemsUsed[z].effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                      usageData.effectedKtxItemId = selectedProcedure.itemsUsed[z].effectedKtxItemId;

                      // Automatically set it to 100 percent;
                      stockInstance.usedItemPercentage = 100;

                      let usedItemLabelNumber = stockInstance.countOpened;
                      let isLoop = true;
                      let usedItemLabel = '';
                      while (isLoop) {
                        console.log('loop useditemlabel');
                        usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                        const $idx = stockInstance.countUsage
                          .findIndex($item => $item.usedItemLabel === usedItemLabel);

                        if ($idx === -1) {
                          isLoop = false;
                        } else {
                          usedItemLabelNumber++;
                        }
                      }
                      stockInstance.usedItemLabel = usedItemLabel;

                      const countUsageByItemLabel = stockInstance.countUsage
                        .filter($item => $item.usedItemLabel === usageData.usedItemLabel);

                      const totalUsage = {
                        isTotal: true,
                        usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageData.usage,
                        personInCharge: usageData.personInCharge,
                        depotId: selectedItemUsed.depotId,
                        akhpId: selectedItemUsed.akhpId,
                        mrId: selectedProcedure.mrId,
                        countOpened: countUsageByItemLabel
                          .reduce((a, b) => a + b.countOpened, 0) + usageData.countOpened,
                        usedItemPercentage: usageData.usedItemPercentage,
                        usedItemLabel: usageData.usedItemLabel,
                        isRunOut: true,
                        createdId: selectedProcedure.createdId,
                        createdAt: selectedProcedure.createdAt,
                      };

                      const usageData1 = await stockInstance.CountUsages.create(usageData);
                      usageData.relationId = usageData1.id;
                      const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                      usageData.idTotalUsage = totalUsageData.id;

                      const average = itemInstance.buyFee / totalUsage.usage;
                      stockInstance.averagePrice = average;
                      stockInstance.averageUsage = totalUsage.usage;

                      // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                      // await KAKHPStock.updateAll(
                      //   { id: selectedItemUsed.akhpId },
                      //   {
                      //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                      //   },
                      // );

                      countUsage.usageDetail.push(usageData);
                    } else if (usedQuantityDifference > 0 && usedQuantityDifference < selectedItemUsed.quantity) {
                      // our assumption here is that user used some of the remaining percentage
                      // then proceed to open a new bottle (any unit), use it and set isRunOut to true
                      const usageDataBeforeRunOut = Object.assign({}, usageData);
                      usageDataBeforeRunOut.usage = selectedItemUsed.quantityUsed;
                      usageDataBeforeRunOut.isRunOut = true;
                      const usageDataAfterRunOut = Object.assign({}, usageData);
                      usageDataAfterRunOut.usage = usedQuantityDifference;

                      usageDataAfterRunOut.countOpened += 1;
                      usageDataAfterRunOut.queueNumber = 1;

                      stockInstance.countOpened += 1;
                      stockInstance.stock -= 1;

                      // Automatically set it to 100 percent;
                      stockInstance.usedItemPercentage = 100;
                      usageDataAfterRunOut.usedItemPercentage = 100;

                      let usedItemLabelNumber = stockInstance.countOpened;
                      let isLoop = true;
                      let usedItemLabel = '';
                      while (isLoop) {
                        console.log('loop useditemlabel');
                        usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                        const $idx = stockInstance.countUsage
                          .findIndex($item => $item.usedItemLabel === usedItemLabel);

                        if ($idx === -1) {
                          isLoop = false;
                        } else {
                          usedItemLabelNumber++;
                        }
                      }

                      stockInstance.usedItemLabel = usedItemLabel;
                      usageDataAfterRunOut.usedItemLabel = usedItemLabel;

                      const stockTotalAKHP = itemInstance.stockTotal - 1;
                      await KAKHPStock.updateAll(
                        { id: selectedItemUsed.akhpId },
                        { stockTotal: stockTotalAKHP },
                      );

                      selectedProcedure.itemsUsed[z].effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                      usageDataBeforeRunOut.effectedKtxItemId = selectedProcedure.itemsUsed[z].effectedKtxItemId;

                      const countUsageByItemLabel = stockInstance.countUsage
                        .filter($item => $item.usedItemLabel === usageDataBeforeRunOut.usedItemLabel);

                      const totalUsage = {
                        isTotal: true,
                        usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageDataBeforeRunOut.usage,
                        personInCharge: usageDataBeforeRunOut.personInCharge,
                        depotId: selectedItemUsed.depotId,
                        akhpId: selectedItemUsed.akhpId,
                        mrId: selectedProcedure.mrId,
                        countOpened: countUsageByItemLabel
                          .reduce((a, b) => a + b.countOpened, 0) + usageDataBeforeRunOut.countOpened,
                        usedItemPercentage: usageDataBeforeRunOut.usedItemPercentage,
                        usedItemLabel: usageDataBeforeRunOut.usedItemLabel,
                        isRunOut: true,
                        createdId: selectedProcedure.createdId,
                        createdAt: selectedProcedure.createdAt,
                      };

                      const usageData1 = await stockInstance.CountUsages.create(usageDataBeforeRunOut);
                      usageDataBeforeRunOut.relationId = usageData1.id;
                      const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                      usageDataBeforeRunOut.idTotalUsage = totalUsageData.id;
                      const usageData2 = await stockInstance.CountUsages.create(usageDataAfterRunOut);
                      usageDataAfterRunOut.relationId = usageData2.id;

                      const average = itemInstance.buyFee / totalUsage.usage;
                      stockInstance.averagePrice = average;
                      stockInstance.averageUsage = totalUsage.usage;

                      // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                      // await KAKHPStock.updateAll(
                      //   { id: selectedItemUsed.akhpId },
                      //   {
                      //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                      //   },
                      // );

                      countUsage.usageDetail.push(usageDataBeforeRunOut);
                      countUsage.usageDetail.push(usageDataAfterRunOut);
                    } else if (usedQuantityDifference === selectedItemUsed.quantity) {
                      // our assumption here is that user don't have any usage left
                      // so we get totalUsage first, open another bottle (any unit)
                      // then set isRunOut to true
                      usageData.isRunOut = true;
                      const countUsageByItemLabel = stockInstance.countUsage
                        .filter($item => $item.usedItemLabel === usageData.usedItemLabel);

                      const totalUsage = {
                        isTotal: true,
                        usage: countUsageByItemLabel.reduce((a, b) => a + b.usage, 0) + usageData.usage,
                        personInCharge: usageData.personInCharge,
                        depotId: selectedItemUsed.depotId,
                        akhpId: selectedItemUsed.akhpId,
                        mrId: selectedProcedure.mrId,
                        countOpened: countUsageByItemLabel
                          .reduce((a, b) => a + b.countOpened, 0) + usageData.countOpened,
                        usedItemPercentage: usageData.usedItemPercentage,
                        usedItemLabel: usageData.usedItemLabel,
                        isRunOut: true,
                        createdId: selectedProcedure.createdId,
                        createdAt: selectedProcedure.createdAt,
                      };

                      usageData.countOpened += 1;
                      usageData.queueNumber = 1;

                      stockInstance.countOpened += 1;
                      stockInstance.stock -= 1;

                      // Automatically set it to 100 percent;
                      stockInstance.usedItemPercentage = 100;
                      usageData.usedItemPercentage = 100;

                      let usedItemLabelNumber = stockInstance.countOpened;
                      let isLoop = true;
                      let usedItemLabel = '';
                      while (isLoop) {
                        console.log('loop useditemlabel');
                        usedItemLabel = `${itemInstance.itemName}-${usedItemLabelNumber}`;
                        const $idx = stockInstance.countUsage
                          .findIndex($item => $item.usedItemLabel === usedItemLabel);

                        if ($idx === -1) {
                          isLoop = false;
                        } else {
                          usedItemLabelNumber++;
                        }
                      }

                      stockInstance.usedItemLabel = usedItemLabel;
                      usageData.usedItemLabel = usedItemLabel;

                      const stockTotalAKHP = itemInstance.stockTotal - 1;
                      await KAKHPStock.updateAll(
                        { id: selectedItemUsed.akhpId },
                        { stockTotal: stockTotalAKHP },
                      );

                      selectedProcedure.itemsUsed[z].effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                      usageData.effectedKtxItemId = selectedProcedure.itemsUsed[z].effectedKtxItemId;

                      const average = itemInstance.buyFee / totalUsage.usage;
                      stockInstance.averagePrice = average;
                      stockInstance.averageUsage = totalUsage.usage;

                      // const average = roundToNearest100(Math.round(itemInstance.buyFee / totalUsage.usage));
                      // await KAKHPStock.updateAll(
                      //   { id: selectedItemUsed.akhpId },
                      //   {
                      //     sellNormalFee: roundToNearest100(average + (average * 30 / 100)),
                      //   },
                      // );

                      const usageData1 = await stockInstance.CountUsages.create(usageData);
                      usageData.relationId = usageData1.id;
                      const totalUsageData = await stockInstance.CountUsages.create(totalUsage);
                      usageData.idTotalUsage = totalUsageData.id;

                      countUsage.usageDetail.push(usageData);
                    }
                  } else {
                    stockInstance.isRunOut = false;
                    const usageData1 = await stockInstance.CountUsages.create(usageData);
                    usageData.relationId = usageData1.id;
                    countUsage.usageDetail.push(usageData);
                  }

                  await stockInstance.save();
                } else {
                  const stockInstance = await KStockDepot.findById(selectedItemUsed.depotId, {
                    fields: ['stock'],
                  });
                  await KStockDepot.updateAll(
                    { id: selectedItemUsed.depotId },
                    { stock: stockInstance.stock - selectedItemUsed.quantity },
                  );

                  const akhpInstance = await KAKHPStock.findById(selectedItemUsed.akhpId, {
                    fields: ['stockTotal'],
                  });
                  await KAKHPStock.updateAll(
                    { id: selectedItemUsed.akhpId },
                    { stockTotal: akhpInstance.stockTotal - selectedItemUsed.quantity },
                  );

                  selectedProcedure.itemsUsed[z].effectedKtxItemId = await utils.handleDecreaseKTxItem(KTxItem, selectedItemUsed);
                }
              }
            }

            dataMrProcedure[i].countUsage = countUsage;
          }
        }
      }

      await KMrProcedure.create(dataMrProcedure);

      return Promise.resolve({});
    } catch (err) {
      return Promise.reject(err);
    }
  }

  KMrProcedure.newPostProcedureDetail = async function(req, data) {
    try {
      const KProcedure = KMrProcedure.app.models.KProcedure;
      //IDEA add to MR KMrProcedure
      //IDEA add new Procedure to KProcedure if not exists

      var isDataArray = Array.isArray(data);
      var dataMrProcedure;
      var countCreateProcedure = 0;

      if (!isDataArray) {
        dataMrProcedure = [];
        dataMrProcedure.push(data);
      } else {
        dataMrProcedure = data;
      }

      for (var i = 0; i < dataMrProcedure.length; i++) {
        if (!dataMrProcedure[i]['isDb'] && typeof dataMrProcedure[i].bpjsProcedure === 'undefined') {
          var dataProcedure = {
            name : dataMrProcedure[i]['procedureName'],
            basicFee : dataMrProcedure[i]['basicFee'],
            doctorFee : dataMrProcedure[i]['doctorFee'],
            totalFee : dataMrProcedure[i]['totalFee'],
            note : dataMrProcedure[i]['note'],
            practiceId : [dataMrProcedure[i]['practiceId']],
            hospitalId : dataMrProcedure[i]['hospitalId'],
            isPriceLock: dataMrProcedure[i]['isPriceLock'],
            createdAt : new Date(),
            createdName : dataMrProcedure[i]['createdName'],
            createdId : dataMrProcedure[i]['createdId'],
            itemsUsed : dataMrProcedure[i]['itemsUsed'] || [],
            prescriptionsUsed : dataMrProcedure[i]['prescriptionsUsed'] || [],
          };

          const itemsUsed = dataProcedure['itemsUsed'];
          if (itemsUsed && Array.isArray(itemsUsed)) {
            for (let xi = 0, xn = itemsUsed.length; xi < xn; xi++) {
              delete dataProcedure['itemsUsed'][xi].DepotStocks;
            }
          }

          const prescriptionsUsed = dataProcedure['prescriptionsUsed'];
          if (prescriptionsUsed && Array.isArray(prescriptionsUsed)) {
            for (let xi = 0, xn = prescriptionsUsed.length; xi < xn; xi++) {
              delete dataProcedure['prescriptionsUsed'][xi].DepotStocks;
            }
          }

          // console.log("proc "+JSON.stringify(dataProcedure));
          var procedure = await KProcedure.create(dataProcedure);
          dataMrProcedure[i]['procedureId'] = procedure['id'];
          countCreateProcedure++;
        } else if (dataMrProcedure[i]['isDb']) {
          const itemsUsed = dataMrProcedure[i]['itemsUsed'];
          if (itemsUsed && Array.isArray(itemsUsed)) {
            for (let xi = 0, xn = itemsUsed.length; xi < xn; xi++) {
              delete dataMrProcedure[i]['itemsUsed'][xi].DepotStocks;
            }
          }

          const prescriptionsUsed = dataMrProcedure[i]['prescriptionsUsed'];
          if (prescriptionsUsed && Array.isArray(prescriptionsUsed)) {
            for (let zi = 0, zn = prescriptionsUsed.length; zi < zn; zi++) {
              delete dataMrProcedure[i]['prescriptionsUsed'][zi].DepotStocks;
            }
          }
        }
      }

      const createdMrProcedure = await KMrProcedure.create(dataMrProcedure);

      return Promise.resolve({
        "countCreateProcedure":countCreateProcedure,
        "procedure":createdMrProcedure
      });
    } catch (err) {
      return Promise.reject(err);
    }
  }

  KMrProcedure.remoteMethod(
    "newPostProcedureDetail", {
      description: ["submit procedure from emr"],
      accepts: [
        { arg: 'req', type: 'object', http: { source: 'req' } },
        { arg: "data", type: "object", http: {source: 'body'}, required: true, description: "Data Dokter" },
      ],
      returns: {
        arg: "status", type: "object", root: true, description: "Return value"
      },
      http: { verb: "post" }
    }
  );

  KMrProcedure.postProcedureDetail = utils.wrap(function *(data, callback) {
    const KProcedure = KMrProcedure.app.models.KProcedure;
    //IDEA add to MR KMrProcedure
    //IDEA add new Procedure to KProcedure if not exists

    var isDataArray = Array.isArray(data);
    var dataMrProcedure;
    var countCreateProcedure = 0;

    if (!isDataArray) {
      dataMrProcedure = [];
      dataMrProcedure.push(data);
    } else {
      dataMrProcedure = data;
    }

    for (var i = 0; i < dataMrProcedure.length; i++) {
      if (!dataMrProcedure[i]['isDb'] && typeof dataMrProcedure[i].bpjsProcedure === 'undefined') {
        var dataProcedure = {
          name : dataMrProcedure[i]['procedureName'],
          basicFee : dataMrProcedure[i]['basicFee'],
          doctorFee : dataMrProcedure[i]['doctorFee'],
          totalFee : dataMrProcedure[i]['totalFee'],
          note : dataMrProcedure[i]['note'],
          practiceId : [dataMrProcedure[i]['practiceId']],
          hospitalId : dataMrProcedure[i]['hospitalId'],
          isPriceLock: dataMrProcedure[i]['isPriceLock'],
          createdAt : new Date(),
          createdName : dataMrProcedure[i]['createdName'],
          createdId : dataMrProcedure[i]['createdId']
        };

        // console.log("proc "+JSON.stringify(dataProcedure));
        var procedure = yield KProcedure.create(dataProcedure);
        dataMrProcedure[i]['procedureId'] = procedure['id'];
        countCreateProcedure++;
      }
    }

    KMrProcedure.create(dataMrProcedure, function (err, mrProcedure) {
      if (err) {
        return callback(err, {"status": "error"})
      }

      return callback(null,{"countCreateProcedure":countCreateProcedure,
      "procedure":mrProcedure});
    });
  });

  KMrProcedure.remoteMethod(
      "postProcedureDetail", {
        description: ["Create dokter data"],
        accepts: [
          {arg: "data", type: "object", http: {source: 'body'}, required: true, description: "Data Dokter"}
        ],
        returns: {
          arg: "status", type: "object", root: true, description: "Return value"
        },
        http: {verb: "post", path: "/postProcedureDetail"}
      }
  );

  KMrProcedure.streak = async function(id, streakData) {
    try {
      let error;

      if (
        !streakData.hasOwnProperty('streakName') ||
        !streakData.hasOwnProperty('streakId')
      ) {
        error = new Error("streakData must only contains streakName & streakId");
        error.status = 422;
        error.code = "DATA NOT MATCH";
        throw error;
      }

      const { KAKHPStock, KStockDepot, KAKHP, KTx, KTxItem } = KMrProcedure.app.models;

      let relatedProcedureStreakIdContainer = new Set();
      let relatedAKHPStreakIdContainer = new Set();

      let dataUpdate = {
        streakAt : new Date(),
        streakName : streakData['streakName'],
        streakId : streakData['streakId']
      };

      await KMrProcedure.updateAll({ "id": id }, dataUpdate);

      // const selectedKMrProcedure = await KMrProcedure.findById(id, {
      //   fields: ['mrId', 'appointId', 'countUsage', 'id', 'itemsUsed', 'hospitalId'],
      // });

      // const mrId = selectedKMrProcedure.mrId.toString();
      // const appointId = selectedKMrProcedure.appointId.toString();
      // const hospitalId = selectedKMrProcedure.hospitalId.toString();
      // let ktxData = await KTx.findOne({
      //   where: {
      //     mrId,
      //     appointId,
      //     hospitalId,
      //   },
      //   fields: ['id'],
      // });

      // if (typeof selectedKMrProcedure.countUsage !== 'undefined') {
      //   const countUsageLength = selectedKMrProcedure.countUsage.usageDetail.length;
      //   const hasCountUsage = countUsageLength > 0;
      //   relatedProcedureStreakIdContainer.add(selectedKMrProcedure.id.toString());

      //   if (hasCountUsage) {
      //     const relatedByAKHPKmrProcedureList = await KMrProcedure.find({
      //       where: {
      //         mrId: selectedKMrProcedure.mrId
      //       },
      //       fields: ['id', 'countUsage', 'streakAt'],
      //     });
      //     const relatedByAKHPKmrProcedureListLength = relatedByAKHPKmrProcedureList.length;

      //     for (let i = 0; i < countUsageLength; i++) {
      //       const selectedCountUsage = selectedKMrProcedure.countUsage.usageDetail[i];

      //       // let minQueueNumber = Number.POSITIVE_INFINITY;
      //       // minQueueNumber = Math.min.apply(
      //       //   Math,
      //       //   selectedKMrProcedure.countUsage.usageDetail.map($item => $item.queueNumber),
      //       // );
      //       // if (!isFinite(minQueueNumber)) {
      //       //   minQueueNumber = Number.POSITIVE_INFINITY;
      //       // }

      //       const relatedProcedureContainer = [];
      //       for (let i = 0; i < relatedByAKHPKmrProcedureListLength; i++) {
      //         const selectedProcedure = relatedByAKHPKmrProcedureList[i];
      //         if (typeof selectedProcedure.streakAt === 'undefined') {
      //           const countUsageLength = selectedProcedure.countUsage.usageDetail.length;
      //           for (let z = 0; z < countUsageLength; z++) {
      //             const selectedUsage = selectedProcedure.countUsage.usageDetail[z];
      //             if (
      //               selectedUsage.akhpId === selectedCountUsage.akhpId &&
      //               selectedUsage.depotId === selectedCountUsage.depotId
      //             ) {
      //               selectedUsage.kmrProcedureId = selectedProcedure.id.toString();
      //               relatedProcedureContainer.push(selectedUsage);
      //             }
      //           }
      //         }
      //       }

      //       const selectedAKHPList = await KAKHP.find({
      //         where: {
      //           akhpId: selectedCountUsage.akhpId,
      //           // depotId: selectedCountUsage.depotId,
      //           mrId: selectedKMrProcedure.mrId,
      //           appointId: selectedKMrProcedure.appointId,
      //           // isOneTimeUseOnly: false,
      //         },
      //         fields: ['id', 'quantity', 'countUsage', 'isOneTimeUseOnly', 'depotId', 'streakAt', 'akhpId'],
      //       });
      //       const parsedSelectedAKHPList = JSON.parse(JSON.stringify(selectedAKHPList));
      //       const slicedParsedSelectedAKHPListLength = parsedSelectedAKHPList.length;
      //       const relatedAKHPContainer = [];
      //       for (let i = 0; i < slicedParsedSelectedAKHPListLength; i++) {
      //         const selectedSlicedAKHP = parsedSelectedAKHPList[i];
      //         if (typeof selectedSlicedAKHP.streakAt === 'undefined') {
      //           const countUsageLength = selectedSlicedAKHP.countUsage.usageDetail.length;
      //           for (let z = 0; z < countUsageLength; z++) {
      //             const selectedUsage = selectedSlicedAKHP.countUsage.usageDetail[z];
      //             if (selectedUsage.depotId === selectedCountUsage.depotId) {
      //               selectedUsage.kmrAKHPId = selectedSlicedAKHP.id;
      //               relatedAKHPContainer.push(selectedUsage);
      //             }
      //           }
      //         }
      //       }

      //       const combinedRelatedContainer = relatedProcedureContainer.concat(relatedAKHPContainer);
      //       let uniqueCombinedRelatedContainer = new Set(
      //         combinedRelatedContainer.map($item => $item.usedItemLabel),
      //       );
      //       uniqueCombinedRelatedContainer = Array.from(uniqueCombinedRelatedContainer);
      //       uniqueCombinedRelatedContainer.sort((a, b) => /(\d+)$/.exec(a)[0] - /(\d+)$/.exec(b)[0]);
      //       const uniqueCombinedRelatedContainerLength = uniqueCombinedRelatedContainer.length;

      //       let sortedCombinedRelatedContainer = [];
      //       for (let $z = 0; $z < uniqueCombinedRelatedContainerLength; $z++) {
      //         const selectedUniqueCombinedRelated = uniqueCombinedRelatedContainer[$z];
      //         const filteredCombinedRelatedContainer = combinedRelatedContainer
      //           .filter($item => $item.usedItemLabel === selectedUniqueCombinedRelated)
      //         filteredCombinedRelatedContainer.sort((a, b) => a.queueNumber - b.queueNumber)
      //         sortedCombinedRelatedContainer = sortedCombinedRelatedContainer
      //           .concat(filteredCombinedRelatedContainer);
      //       }

      //       const queueNumberIndex = sortedCombinedRelatedContainer
      //         .findIndex($item => {
      //           return $item.queueNumber === selectedCountUsage.queueNumber &&
      //             $item.depotId === selectedCountUsage.depotId &&
      //             $item.usedItemLabel === selectedCountUsage.usedItemLabel;
      //         });

      //       sortedCombinedRelatedContainer = sortedCombinedRelatedContainer.slice(queueNumberIndex);
      //       const combinedRelatedContainerLength = sortedCombinedRelatedContainer.length;
      //       const combinedRelatedContainerLastIndex = combinedRelatedContainerLength - 1;

      //       for (let z = combinedRelatedContainerLastIndex; z >= 0; z--) {
      //         const selectedData = sortedCombinedRelatedContainer[z];
      //         let itemInstance;

      //         if (typeof selectedData.kmrAKHPId !== 'undefined') {
      //           relatedAKHPStreakIdContainer.add(selectedData.kmrAKHPId);
      //           itemInstance = await KAKHP.findById(selectedData.kmrAKHPId, {
      //             fields: ['id', 'streakAt', 'quantity'],
      //           });
      //         } else if (typeof selectedData.kmrProcedureId !== 'undefined') {
      //           itemInstance = await KMrProcedure.findById(selectedData.kmrProcedureId, {
      //             fields: ['id', 'streakAt', 'itemsUsed'],
      //           });
      //           if (typeof itemInstance.streakAt === 'undefined') {
      //             relatedProcedureStreakIdContainer.add(selectedData.kmrProcedureId);
      //             // const parsedItemInstance = JSON.parse(JSON.stringify(itemInstance));
      //             // const parsedItemsUsedLength = parsedItemInstance.itemsUsed.length;
      //             // for (let $i = 0; $i < parsedItemsUsedLength; $i++) {
      //             //   const selectedItemUsed = parsedItemInstance.itemsUsed[$i];
      //             //   if (selectedItemUsed.isOneTimeUseOnly) {
      //             //     const stockData = await KStockDepot.findById(selectedItemUsed.depotId, {
      //             //       fields: ['stock'],
      //             //     });
      //             //     await KStockDepot.updateAll(
      //             //       { id: selectedItemUsed.depotId },
      //             //       {
      //             //         stock: stockData.stock + selectedItemUsed.quantity,
      //             //       },
      //             //     );

      //             //     const kakhpData = await KAKHPStock.findById(selectedItemUsed.akhpId, {
      //             //       fields: ['stockTotal'],
      //             //     });
      //             //     await KAKHPStock.updateAll(
      //             //       { id: selectedItemUsed.akhpId },
      //             //       { stockTotal: kakhpData.stockTotal + selectedItemUsed.quantity },
      //             //     );
      //             //   }
      //             // }
      //           }
      //         }

      //         if (typeof itemInstance.streakAt === 'undefined') {
      //           const akhpInstance = await KAKHPStock.findById(selectedData.akhpId, {
      //             fields: ['id', 'isOneTimeUseOnly'],
      //           });

      //           if (!akhpInstance.isOneTimeUseOnly) {
      //             const stockData = await KStockDepot.findById(selectedData.depotId);

      //             if (selectedData.isRunOut && !selectedData.isTotal) {
      //               const kakhpData = await KAKHPStock.findById(selectedData.akhpId, {
      //                 fields: ['stockTotal'],
      //               });
      //               await KAKHPStock.updateAll(
      //                 { id: selectedData.akhpId },
      //                 { stockTotal: kakhpData.stockTotal + 1 },
      //               );

      //               await KStockDepot.updateAll(
      //                 { id: selectedData.depotId },
      //                 {
      //                   stock: stockData.stock + 1,
      //                 },
      //               );

      //               await utils.handleIncreaseKTxItem(KTxItem, selectedData);

      //               await KStockDepot.updateAll(
      //                 { id: selectedData.depotId },
      //                 {
      //                   countOpened: stockData.countOpened - 1,
      //                 },
      //               );
      //             }

      //             if (z === 0) {
      //               await KStockDepot.updateAll(
      //                 { id: selectedData.depotId },
      //                 {
      //                   isFirstTime: selectedData.oldStockState.isFirstTime,
      //                   isRunOut: selectedData.oldStockState.isRunOut,
      //                   usedItemLabel: selectedData.oldStockState.usedItemLabel,
      //                   usedItemPercentage: selectedData.oldStockState.usedItemPercentage,
      //                 },
      //               );
      //             }

      //             stockData.CountUsages.unset(selectedData.relationId, function(err) {
      //               console.log('deleted count usage');
      //             });

      //             if (selectedData.idTotalUsage) {
      //               stockData.CountUsages.unset(selectedData.idTotalUsage, function(err) {
      //                 console.log('deleted total count usage');
      //               });
      //             }

      //             const stockState = await KStockDepot.findById(selectedData.depotId, {
      //               fields: ['countUsage'],
      //             });
      //             if (stockState.countUsage.length === 0) {
      //               await KStockDepot.updateAll(
      //                 { id: selectedData.depotId },
      //                 { countOpened: 0 },
      //               );
      //             }
      //           }
      //         }
      //       }
      //     }
      //   } else {
      //     // const itemsUsedLength = selectedKMrProcedure.itemsUsed.length;
      //     // for (let i = 0; i < itemsUsedLength; i++) {
      //     //   const selectedItemUsed = selectedKMrProcedure.itemsUsed[i];
      //     //   if (selectedItemUsed.isOneTimeUseOnly) {
      //     //     const stockData = await KStockDepot.findById(selectedItemUsed.depotId, {
      //     //       fields: ['stock'],
      //     //     });
      //     //     await KStockDepot.updateAll(
      //     //       { id: selectedItemUsed.depotId },
      //     //       {
      //     //         stock: stockData.stock + selectedItemUsed.quantity,
      //     //       },
      //     //     );

      //     //     const kakhpData = await KAKHPStock.findById(selectedItemUsed.akhpId, {
      //     //       fields: ['stockTotal'],
      //     //     });
      //     //     await KAKHPStock.updateAll(
      //     //       { id: selectedItemUsed.akhpId },
      //     //       { stockTotal: kakhpData.stockTotal + selectedItemUsed.quantity },
      //     //     );

      //     //     await utils.handleIncreaseKTxItem(KTxItem, selectedItemUsed);
      //     //   }
      //     // }
      //   }
      // } else {
      //   relatedProcedureStreakIdContainer.add(selectedKMrProcedure.id.toString());
      // }

      // relatedAKHPStreakIdContainer = Array.from(relatedAKHPStreakIdContainer);
      // const relatedAKHPStreakIdContainerLength = relatedAKHPStreakIdContainer.length;
      // for (let i = 0; i < relatedAKHPStreakIdContainerLength; i++) {
      //   await KAKHP.updateAll({ "id": relatedAKHPStreakIdContainer[i] }, dataUpdate);
      // }

      // relatedProcedureStreakIdContainer = Array.from(relatedProcedureStreakIdContainer);
      // const relatedProcedureStreakIdContainerLength = relatedProcedureStreakIdContainer.length;
      // for (let i = 0; i < relatedProcedureStreakIdContainerLength; i++) {
      //   // handle increase/decrease stock ktx item
      //   const $itemInstance = await KMrProcedure.findById(relatedProcedureStreakIdContainer[i], {
      //     fields: ['id', 'streakAt', 'itemsUsed', 'bpjsProcedure'],
      //   });
      //   if (typeof $itemInstance.streakAt === 'undefined' && typeof $itemInstance.bpjsProcedure === 'undefined') {
      //     const parsedItemInstance = JSON.parse(JSON.stringify($itemInstance));
      //     const parsedItemsUsedLength = parsedItemInstance.itemsUsed.length;
      //     for (let $i = 0; $i < parsedItemsUsedLength; $i++) {
      //       const selectedItemUsed = parsedItemInstance.itemsUsed[$i];
      //       if (selectedItemUsed.isOneTimeUseOnly) {
      //         const stockData = await KStockDepot.findById(selectedItemUsed.depotId, {
      //           fields: ['stock'],
      //         });
      //         await KStockDepot.updateAll(
      //           { id: selectedItemUsed.depotId },
      //           {
      //             stock: stockData.stock + selectedItemUsed.quantity,
      //           },
      //         );

      //         const kakhpData = await KAKHPStock.findById(selectedItemUsed.akhpId, {
      //           fields: ['stockTotal'],
      //         });
      //         await KAKHPStock.updateAll(
      //           { id: selectedItemUsed.akhpId },
      //           { stockTotal: kakhpData.stockTotal + selectedItemUsed.quantity },
      //         );

      //         await utils.handleIncreaseKTxItem(KTxItem, selectedItemUsed);
      //       }
      //     }
      //   }

      //   await KMrProcedure.updateAll({ "id": relatedProcedureStreakIdContainer[i] }, dataUpdate);

      //   if (ktxData) {
      //     const streakedData = await KMrProcedure.findById(relatedProcedureStreakIdContainer[i], {
      //       fields: ['procedureId', 'totalFee', 'isTemp', 'bpjsProcedure', 'kdTindakanSK'],
      //     });

      //     if (!streakedData.isTemp) {
      //       await KTx.updateAll(
      //         { id: ktxData.id },
      //         {
      //           '$inc': {
      //             subTotalFee: -(streakedData.totalFee),
      //             totalFee: -(streakedData.totalFee),
      //           }
      //         },
      //         { allowExtendedOperators: true },
      //       );

      //       if (typeof streakedData.bpjsProcedure !== 'undefined') {
      //         const ktxItemData = await KTxItem.findOne({
      //           where: {
      //             type: 'procedure',
      //             hospitalId,
      //             transactionId: ktxData.id,
      //             kdTindakanSK: streakedData.kdTindakanSK,
      //           },
      //           fields: ['id'],
      //         });
      //         if (!ktxItemData) {
      //           const ktxItemData = await KTxItem.findOne({
      //             where: {
      //               type: 'procedure',
      //               hospitalId,
      //               transactionId: ktxData.id,
      //               'bpjsProcedure.kdTindakan': streakedData.bpjsProcedure.kdTindakan,
      //             },
      //             fields: ['id'],
      //           });
      //           if (ktxItemData) await KTxItem.destroyById(ktxItemData.id);
      //         } else {
      //           await KTxItem.destroyById(ktxItemData.id);
      //         }
      //       } else {
      //         const ktxItemData = await KTxItem.findOne({
      //           where: {
      //             type: 'procedure',
      //             hospitalId,
      //             transactionId: ktxData.id,
      //             procedureId: streakedData.procedureId.toString(),
      //           },
      //           fields: ['id'],
      //         });
      //         await KTxItem.destroyById(ktxItemData.id);
      //       }
      //     }
      //   }
      // }

      return Promise.resolve({
        status: "succeed",
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };

  KMrProcedure.remoteMethod(
    "streak", {
      description: ["streak"],
      accepts: [
        { arg: "id", type: "string", http: {source: 'path'}, required: true, description: "Id Vital Sign" },
        { arg: "streakData", type: "object", http: {source: 'body'}, required: true, description: "Data Streak" }
      ],
      returns: {
        arg: "status", type: "object", root: true, description: "Return value"
      },
      http: {verb: "put", path: "/:id/streak"}
    }
  );

  KMrProcedure.getList = function (filter, req, callback) {
    //IDEA getList and group them by date
    var error, patientId, hospitalId;

    // { $limit : 5 },
    // { $skip: 3 },

    KMrProcedure.getDataSource().connector.connect(function(err, db) {
      var collection = db.collection('KMrProcedure');
      var patientId = KMrProcedure.getDataSource().ObjectID(filter['patientId']);
      var hospitalId = KMrProcedure.getDataSource().ObjectID(filter['hospitalId']);

      // with the change of loopback-connector-mongodb to >=3.6.0
      // aggregate now returns AggregationCursor
      // console.log("trip connector MrProcedure "+patientId+" v "+hospitalId+"}");
      const cursor = collection.aggregate([
        { $match: { patientId: patientId, hospitalId: hospitalId } },
        { $lookup: { from: 'KMr', localField: 'mrId', foreignField: '_id', as: 'mrData' } },
        { $unwind: { path: '$mrData', preserveNullAndEmptyArrays: true } },
        { $group: {
          _id: {createdAt: "$createdAt",createdId: "$createdId",createdAt: "$createdAt",
          mrNo: "$mrNo",mrId: "$mrId",practiceId: "$practiceId",appointId: "$appointId",
          createdName: "$createdName",patientId: "$patientId",hospitalId: "$hospitalId",
          ownedPacketId: "$ownedPacketId",quantity: "$quantity"},
          procedure: {
            "$addToSet" : {
              id: "$_id",
              procedure2: {
                "$addToset": {
                  id: "$_id.subtheme"
                }
              },
              procedureName: "$procedureName",
              procedureId: "$procedureId",
              basicFee: "$basicFee",
              doctorFee: "$doctorFee",
              doctorFeePercentage: "$doctorFeePercentage",
              isDb: "$isDb",
              itemsUsed: "$itemsUsed",
              discountFee: "$discountFee",
              totalFee: "$totalFee",
              notes: "$notes",
              streakName: "$streakName",
              streakId: "$streakId",
              streakAt: "$streakAt",
              mrData: "$mrData",
              ownedPacketId: "$ownedPacketId",
              quantity: "$quantity",
            },

          },
        }},
        { $sort: { "_id.createdAt" : -1 }},
      ]);

      cursor.get(function(err, data) {
        if (err) return callback(err);
        return callback(null, data);
      });
    });
  };

  KMrProcedure.remoteMethod(
      "getList", {
        description: ["getList"],
        accepts: [
          {arg: "filter", type: "object", required: true, description: "filter"},
          {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {
          arg: "status", type: "object", root: true, description: "Return value"
        },
        http: {verb: "get", path: "/getList"}
      }
  );

  KMrProcedure.observe('after save', async function(ctx) {
    if (ctx.instance && ctx.isNewInstance && ctx.instance.hospitalId) {
      const KConfig = KMrProcedure.app.models.KConfig;
      const config = await KConfig.findOne({where: {hospitalId: ctx.instance.hospitalId}});
      if (config && config.isTrialClinicaPro) {
        const KUserTrialTracker = KMrProcedure.app.models.KUserTrialTracker;
        const userTrialInstance = await KUserTrialTracker.findOne({where: {hospitalId: ctx.instance.hospitalId}});
        if (userTrialInstance) {
          await KMrProcedure.updateAll({id: ctx.instance.id}, {isFromTrial: true});
        }
      } if (config && config.activeBilling && (config.activeBilling.mainProductName === "clinicaFree" || config.activeBilling.mainProductName === "schedulaFree" || config.activeBilling.mainProductName === "privataFree")) {
        const KUserFreeTracker = KMrProcedure.app.models.KUserFreeTracker;
        const userFreeInstance = await KUserFreeTracker.findOne({where: {hospitalId: ctx.instance.hospitalId}});
        if (userFreeInstance) {
          await KMrProcedure.updateAll({id: ctx.instance.id}, {isFromFree: true});
        }
      }
    }
    return;
  });

  // Pasien.disableRemoteMethod("create", true);
  // Pasien.disableRemoteMethod("upsert", true);
  // Pasien.disableRemoteMethod("updateAll", true);
  // Pasien.disableRemoteMethod("updateAttributes", false);
  // Pasien.disableRemoteMethod("find", true);
  // Pasien.disableRemoteMethod("findById", true);
  // Pasien.disableRemoteMethod("findOne", true);
  // Pasien.disableRemoteMethod("deleteById", true);
  // Pasien.disableRemoteMethod("confirm", true);
  // Pasien.disableRemoteMethod("count", true);
  // Pasien.disableRemoteMethod("exists", true);
  // Pasien.disableRemoteMethod("resetPassword", true);
  // Pasien.disableRemoteMethod('replaceOrCreate', true);
  // Pasien.disableRemoteMethod('replaceById', true);
  // Pasien.disableRemoteMethod('createChangeStream', true);
  // Pasien.disableRemoteMethod('__count__Bookings', false);
  // Pasien.disableRemoteMethod('__create__Bookings', false);
  // Pasien.disableRemoteMethod('__delete__Bookings', false);
  // Pasien.disableRemoteMethod('__findById__Bookings', false);
  // Pasien.disableRemoteMethod('__get__Bookings', false);
  // Pasien.disableRemoteMethod('__destroyById__Bookings', false);
  // Pasien.disableRemoteMethod('__updateById__Bookings', false);
};
