import fs from 'fs';

import { fetchDailyData } from './controller/getDataDaily.js'
import { settlementDayData } from "./model/settlementDayData.js";
import { changeDayFlag } from './model/changeDayFlag.js';
import { changeDayDatum } from './model/changeDayFlag.js';

console.log("loggin step 1");

// processing history data logic
const currentData = new Date();
console.log(currentData);

if (changeDayFlag === false && currentData !== changeDayDatum) {
    fs.writeFile('changeDayFlag.js', `export const changeDayFlag = false; export const changeDayDatum = \`${currentData}\`;`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Флаг успешно обновлен!');
    });

    // Импортируем данные и меняем их местами в нужной последовательности
    Promise.all([
        import("./model/currentDayData.js"),
        import("./model/nextDayData.js"),
        import("./model/lastDayData.js")
    ]).then(([{ currentDayData }, { nextDayData }, { lastDayData }]) => {
        // Переписываем данные в файлы
        let settlementDayData = currentDayData; // Используем данные
        fs.writeFileSync('./model/currentDayData.js', `export const settlementDayData = ${JSON.stringify(settlementDayData, null, 2)};`);
        console.log("loggin step 2");

        let currentDayDataNext = nextDayData; // Сдвигаем данные
        fs.writeFileSync('./model/nextDayData.js', `export const currentDayData = ${JSON.stringify(currentDayDataNext, null, 2)};`);
        console.log("loggin step 3");

        let nextDayDataLast = lastDayData; // Сдвигаем данные
        fs.writeFileSync('./model/lastDayData.js', `export const nextDayData = ${JSON.stringify(nextDayDataLast, null, 2)};`);
        console.log("loggin step 4");
    }).catch(err => {
        console.error('Error loading data:', err);
    });
} else {
    changeDayFlag = false;
}

console.log("loggin step 5");


// fetch logic
fetchDailyData(latitude, longitude, chartData);
// settlementDayData перезаписывается как часть феча
console.log("loggin step 6")


// inaccuracy logic
// inaccuracySetting(lastDayData, nextDayData, currentDayData, settlementDayData);


// chart creation
// const ctx = document.getElementById('myChart').getContext('2d');



