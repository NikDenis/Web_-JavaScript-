// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - чётное число`);
//     } else {
//         console.log(`${i} - нечётное число`);
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// function sumNumbers (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// function minNumbers (array) {
//     let minNum = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (minNum > array[i]) {
//             minNum = array[i]
//         } else {
//             continue;
//         }
//     }
//     return minNum;
// }
// function searchNumbers (array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 3) {
//             count++;
//         } else {
//             continue;
//         }
//     }
//     if (count === 0) {
//         console.log('В массиве нет числа 3');
//     } else {
//         console.log(`В массиве есть число 3, ${count} раз`);
//     }
// }
// const array = new Array(5);
// for (let i = 0; i < array.length; i++) { 
//     array[i] = Math.floor(Math.random() * 10);
// }
// console.log(array);
// console.log('Сумма элементов массива равна: ' + sumNumbers(array));
// console.log(minNumbers(array));
// searchNumbers(array);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки 
// должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// let count = 'x';
// for (let i = 0; i < 20; i++) {
//     console.log(count);
//     count += 'x';
// }

// let count = '';
// for (let i = 0; i <= 20; i++) {
//     console.log(count);
//     count += 'x';
// }