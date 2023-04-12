"use strict"

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или
// равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}



// Первый способ.
const res = Object.values(numbers);
console.log(res);
/**
 * Функция ищет среди элементов массива числа равные либо больше 3. 
 * @param {numbers} arr Принимает массив
 */
function sortingArrNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3) {
            console.log(`Число ${arr[i]} больше или равно 3.`);
        }
        
    }
}
sortingArrNumbers(res);



// Второй способ.
// /**
//  * Выводит значения объекта которые равны или больше 3.
//  * @param {objects} objects Принимает объект. 
//  */
// function sortingObjNumbers(objects) {
//     for (let key in objects) {
//         if (objects[key] >= 3) {
//             console.log(objects[key])
//         } 
        
//     }
// }
// sortingObjNumbers(numbers);


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения,
// к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// console.log(post.author, post.comments[0].rating.dislikes,
//             post.comments[1].userId, post.comments[1].text);


// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15%
// используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];


// Просто выводит цену меньше на 15% не меняя значения в массиве
// console.log(products[0].price * 0.85);
// console.log(products[1].price * 0.85);
// console.log(products[2].price * 0.85);


// Просто выводит цену меньше на 15% не меняя значения в массиве
products.forEach(element => console.log(element.price *  0.85));


// Меняет значения в самом массиве.
// products[0].price *= 0.85;
// products[1].price *= 0.85;
// products[2].price *= 0.85;
// console.log(products);

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
// фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
// отсортированный массив в консоль.

const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

const arrPhoto = products.filter(product => (product.photos && 
                                           product.photos != 0));
console.log(arrPhoto);


const sortPrice = products.sort((a, b) => a.price > b.price? 1 : -1);
console.log(sortPrice);



// **Задание 5**
// Дано 2 массива 

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота",
"воскресенье"];
const obj = {};

for (let i = 0; i < en.length; i++) {
    obj[en[i]] = ru[i];
}

console.log(obj);


// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были
// ключами, а значения второго массива — значениями.