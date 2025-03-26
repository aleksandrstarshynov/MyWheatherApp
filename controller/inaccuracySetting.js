import { settlementDayData } from "../model/settlementDayData.js";
import { currentDayData } from "../model/currentDayData.js";
import {  inacuracyCalculation } from "../controller/inacuracyCalculation.js"


// собрать очередность что с чем сравнивать для посчета погрешности
    let inaccuracyData = [lastDayData, nextDayData, currentDayData, settlementDayData];
   
for (let dayPoint = 0; dayPoint < 3; dayPoint++) {


        let CheckPoint1 = lastDayData[dayPoint]         // неправильный путь
        let CheckPoint2 = nextDayData[dayPoint]         // неправильный путь
        let CheckPoint3 = currentDayData[dayPoint]      // неправильный путь
        let CheckPoint4 = settlementDayData[dayPoint]   // неправильный путь

        trueTemp = inaccuracyData[dayPoint];
        measuredTemp = inaccuracyData[dayPoint + 1];




    // вызвать функцию inacuracyCalculation
    inacuracyCalculation(trueTemp, measuredTemp)
}


    // TODO   расширить математику и сделать то же самое но для второй температуры !!!!!!!!!!!!!!!
