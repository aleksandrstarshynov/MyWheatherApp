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