// import block

// processing history data logic
const currentData = new Date().toISOString().split('T')[0]; // Формат YYYY-MM-DD

import { changeDayFlag, changeDayDatum } from '../Model/changeDayFlag.js';

if (!changeDayFlag && currentData !== changeDayDatum) { // Проверяем условия
    console.log(`Проверка: ${currentData}`);
    console.log(`Проверка: ${changeDayFlag}`);
    console.log(`Проверка: ${changeDayDatum}`);

    async function updateData(currentData) {
        try {
            console.log('📤 Отправляем запрос на сервер...');
            console.log('📝 Данные, отправляемые в fetch:', currentData);
    
            const response = await fetch('http://localhost:3000/update-flag', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentData })
            });
    
            if (!response.ok) {
                // Сервер вернул ошибку (например, 500)
                const errorText = await response.text(); // Читаем ответ как текст
                throw new Error(`Сервер вернул ошибку: ${response.status} - ${errorText}`);
            }
    
            const responseData = await response.json(); // Теперь точно JSON
            console.log('✅ Сервер ответил:', responseData);
            return responseData;
    
        } catch (error) {
            console.error('❌ Ошибка:', error);
        }
    }
    
    updateData(currentData); // Вызов функции!
}



// Update data via fetch
// getDataDaily();                       //TODO

// Process previous day's data
// dataProcessing();                     //TODO

// Calculate occuracy
// inacuracyCalculation();              //TODO

// Render UI

// Render chart 
//chart()                              //TODO







// // Функции для получения возраста с сервера
// async function getAge() {
//     try {
//         const response = await fetch('http://localhost:3000/update-data', {
//             method: 'GET'
//         });
//         const responseData = await response.json();  
//         console.log(responseData); 
//         return responseData.age;  
//     } catch (error) {
//         console.error('Ошибка получения возвраста первый раз:', error);
//     }
// }


// // async function getNewAge() {
// //     try {
// //         const response = await fetch('http://localhost:3000/get-data', {
// //             method: 'GET'
// //         });
// //         const responseData = await response.json();  // Преобразуем ответ в JSON
// //         return responseData.age;  // Возвращаем возраст
// //     } catch (error) {
// //         console.error('Ошибка:', error);
// //     }
// // }

// // Функция для обновления данных
// async function updateData(newData) {
//     try {
//         const response = await fetch('http://localhost:3000/update-data', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ newData })
//         });
//         const responseData = await response.json();
//         return responseData;
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// }

// // Функция для отображения информации на странице
// function displayAge(age, isUpdated = false) {

//     const p = document.createElement('p');
//     p.textContent = isUpdated ? `Updated age from server: ${age}` : `Age from server: ${age}`;
//     document.body.appendChild(p);
// }

// // Главная функция для рендеринга страницы
// async function renderPageHome() {
//     // Получаем возраст с сервера
//     const age = await getAge();  // Дожидаемся получения данных
//     // console.log(age);  // Теперь можно использовать переменную age

//     // Отображаем полученный возраст на странице
//     displayAge(age);  // Выводим начальный возраст

//     // Обновляем данные, добавляем 100 к возрасту
//     let newData = age + 100;
//     console.log(newData);


//      // Отправляем обновленные данные на сервер 
//      const updatedData = await updateData(newData);
//      console.log(updatedData);

//      // Получаем и отображаем обновленный возраст
//      //const updatedAge = await getAge();  // Дожидаемся обновленных данных
//      //displayAge(age, true);  // Выводим обновленный возраст
// }

// renderPageHome()
