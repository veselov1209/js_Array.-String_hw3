//1. Отфильтруйте отрицательные элементы в массиве, оставив только положительные.

// let a = [1, 2, -3, 0, -5, 7, 1, 3, -45, 1.2, 0, 21,];

// function negativeElArr(arr){
//     let aResult = a.filter(el => el >= 0);
//     return aResult;
// }

// console.log(negativeElArr(a));

//2. Найдите сумму элементов массива которые меньше 100 по значению

// let arr = [100, 100, - 1, 51, 2, -3, 0, -5, 7, 1, 3, -45, 1.2, 0, 21,];

// function resultSum(a){
//     let result = arr.reduce((prev, item)=>{
//             if (item < 100){
//                 return prev + item;
//             } else {
//                 return prev;
//             }
//     }, 0);
//     return result;
// }

// console.log(resultSum(arr));

//3. Уменьшите каждый элемент массива на 3%

// let a = [1, 34, 5, 43, 2, 78, 100, 1];
// let aRes = [];
// a.forEach(el => {
//     aRes.push(el - el * 0.03);
// })
// console.log(aRes);

//4. Если все элементы массива меньше 100 увеличьте их на 5%.

// let b = [1, 34, 10, 43, -2, 78, 10, 1];

// function funResult(a){
//     let aRes = [];
//     if (a.every(el => el < 100)){
//         a.forEach(el => aRes.push(el + el * 0.05));
//         return aRes;
//     } else{
//         return 'Не все элементы массива меньше 100'; 
//     }
// }

// console.log(funResult(b));

//5. Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное").

// let str = 'abcdeedcba';

// function isStringAPalindrom(str){
//     let arr1 = str.split('');
//     let arr2 = arr1.slice().reverse();
//     for (i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]){
//             return 'No';
//         } else {
//             return 'Yes';
//         }
//     }   
// }
// console.log(isStringAPalindrom(str));

//6. Соедините две строки в одну и переверните наоборот.

// let str1 = 'Hello', str2 = 'World';

// function reverseString(s1, s2){
//     let strResult = s1.concat(" ", s2).split(' ').reverse().join(' ');
//     return strResult;
// }

// console.log(reverseString(str1,str2));

// 7. Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.

// let str = 'hello world! hello world! hello world! hello world!';

// function firstLetterUp(str){
//     let arrResult = [];
//     let arr1 = str.split(' ');
//     for (let i = 0; i<arr1.length; i++){
//         arrResult.push(arr1[i].charAt(0).toUpperCase().concat(arr1[i].slice(1)));
//     }
//     return arrResult.join(' ');
// }

// console.log(firstLetterUp(str));

// 8. Вывести индексы минимальных элементов массива.

// let arr = [0, 3, -4, 1, 3, -4, 5, 5, 1, 0, 10, 3,];

// function indexMinElArrow(a){
//     let minElement = arr[0];
//     arr.forEach(el => {if (minElement > el){
//         minElement = el;
//     } 
//     });
//     arr.forEach((el, i) => {if (el == minElement){
//         console.log(i);
//     } 
//     });
// }

// indexMinElArrow(arr);