import path from 'path';
import fs from 'fs/promises';

// Получаем абсолютный путь к файлу
const filePath = path.resolve('Model/changeDayFlag.js'); 

export async function dayFlagUpdate(newData) {
    console.log(`Начинаем обновление флага с данными: ${newData}`);

    const content = `export const changeDayFlag = false; 
export const changeDayDatum = \`${newData}\`;`;

    // Получаем путь к директории
    const dir = path.dirname(filePath);

    try {
        // Проверяем и создаем директорию, если она не существует
        await fs.mkdir(dir, { recursive: true });

        // Записываем данные в файл
        await fs.writeFile(filePath, content, 'utf8');
        console.log('✅ Файл успешно записан!', filePath);
    } catch (err) {
        console.error('❌ Ошибка при записи файла:', err);
        throw err;
    }
}
