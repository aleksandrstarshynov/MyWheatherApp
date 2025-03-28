import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
// import { updateDataFile } from './fileUtils.js';
// import { data } from './public/data.js';
import { dayFlagUpdate } from './Controller/dayFlagUpdate.js';

// Определяем текущую директорию (так как ES-модули не поддерживают __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
// Middleware для работы с JSON
app.use(express.json());
// Отдаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

//   test endpoints
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});
app.post('/test-post', (req, res) => {
    console.log('Получен POST-запрос:', req.body); // Выводим содержимое запроса
    res.json({ message: 'Data received!' });
});







// POST request fir Day Flag update
app.post('/update-flag', async (req, res) => {
    console.log('🚀 Получен POST-запрос на /update-flag');
    console.log('📝 Полный body запроса:', req.body);

    const newData = req.body.currentData;
    
    if (!newData) {
        console.error('❌ Ошибка: newData отсутствует!');
        return res.status(400).json({ error: 'newData is required' });
    }
    
    console.log('✅ newData получен:', newData);
    
    try {
        await dayFlagUpdate(newData);
        console.log('🎉 Обновление успешно завершено.');
        res.json({ message: `Данные обновлены с новым значением: ${newData}` });
    } catch (err) {
        console.error('🔥 Ошибка при обновлении newData:', err.message, err.stack);  // Лог ошибки
        res.status(500).send(`Ошибка сервера при запросе обновления newData: ${err.message}`);
    }
});




app.listen(3000, () => console.log('Сервер запущен на порту 3000'));