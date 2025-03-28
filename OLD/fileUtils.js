import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
// import { newData } from './server.js';

// Определяем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//  console.log(" это значение newData уже в updateDataFile:", newData);



// Путь к файлу data.js
const dataFilePath = path.join(__dirname, 'public', 'newData.js');


export async function updateDataFile(newData) {
    // console.log("перешли на updateDataFile")
    try {
        await writeFile(dataFilePath, `export const data = ${JSON.stringify(newData, null, 2)};`);
        return 'Файл data.js успешно обновлен';
    } catch (error) {
        throw new Error('Ошибка при записи в файл data.js');
    }
}
