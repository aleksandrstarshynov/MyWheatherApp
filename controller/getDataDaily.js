import { promises as fs } from 'fs';

// import { currentDayData } from '../model/currentDayData.js';
import { chartData } from '../model/chartData.js';
import { settlementDayData } from "../model/settlementDayData.js";


let latitude = 52.5891;
let longitude = 4.6945;

export async function fetchDailyData(latitude, longitude, chartData, settlementDayData) {
  try {
    const [URL1] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature`),
          ]);

    const [deilyData1] = await Promise.all([
      URL1.json(),
    ]);

    const expectedTemperatures1 = deilyData1.hourly.temperature_2m;
    const apparentTemperatures1 = deilyData1.hourly.apparent_temperature;

    let columnIndex1 = 0;
    chartData.forEach((entry, hourIndex) => {
      entry.values[columnIndex1] = expectedTemperatures1[hourIndex];
    });

    let columnIndex2 = 1;
    chartData.forEach((entry, hourIndex) => {
      entry.values[columnIndex2] = apparentTemperatures1[hourIndex];
    });

    // Записываем обновленные данные в файл
    await fs.writeFile('./model/chartData.js', `export let chartData = ${JSON.stringify(chartData, null, 2)};`);
    console.log('Файл chartData успешно обновлен');
  
  // settlementDayData из этого же фетча должна быть обновлена
  let columnIndex3 = 0;
      settlementDayData.forEach((entry, hourIndex) => {
      entry.values[columnIndex3] = expectedTemperatures1[hourIndex];
    });

    let columnIndex4 = 1;
    settlementDayData.forEach((entry, hourIndex) => {
      entry.values[columnIndex4] = apparentTemperatures1[hourIndex];
    });

    // Записываем обновленные данные в файл
    await fs.writeFile('./model/settlementDayData.js', `export let settlementDayData = ${JSON.stringify(settlementDayData, null, 2)};`);
    console.log('Файл settlementDayData успешно обновлен');



  
  } catch (error) {
    console.error('Ошибка fetching:', error);
  }
}

fetchDailyData(latitude, longitude, chartData);












//   fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature`)
//     .then(response => response.json())
//     .then(openMeteoData => {
//       const temperatures = openMeteoData.hourly.temperature_2m;
//       const firstTemp = temperatures[0];
//       const lastTemp = temperatures[temperatures.length - 1];
  
// // Save data as array in file (manually update the file)
//       console.log(`Update weatherData.js with: [${firstTemp}, ${lastTemp}]`);
//     })
//     .catch(error => console.error("Error fetching weather data:", error));
  