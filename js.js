// console.log("JavaScript");

// data types in javascript
// 1. Number
// 2. String
// 3. Boolean
// 4. Bigint
// 5. Object
// 6. Symbol
// 7. undefined
// 8. null

// var a = 10;
// var b = 20;

// var c = 30;

// function fun1(){
//     var x = 100;
//     function fun2(){
//        console.log(x);
//     }
//     return fun2();
// }

// fun1()();

// for (var i = 1; i <= 5; i++) {
//   function fun(v) {
//     setTimeout(() => {
//       console.log("ith value is ", v);
//     }, 1000);
//   }
//   fun(i);
//   setTimeout(()=>{
//     console.log(i);
//   },1500)
// }

// var is a functional scoped
// let and const is a blocked scoped
// let value can be updated but const not

// let a = 10

// function fun() {
//    a = 20;
// }

// console.log(a);

// fun();

// console.log(a)

// {
//     let a = 30;
// }

// console.log(a);

// var a = 10;
// let b = 20;
// console.log(add());
// console.log(a);
// console.log(b);

// function add(x,y) {
//    var c =10;
//   return c;
// }

// function fun1(){
//     const a = 10;
//     function fun4(){
//         console.log("hello");
//     }
//     return fun4();
//     return function fun2(){
//        return function fun3(){
//         console.log(a)
//        }
//     }
// }

// fun1();


// function in javascript

// function sum(a,b){
//   return a+b;
// }

// var fun = function (a,b){
//   return a+b;
// }

// var arrowFun  = ()=>{

// }

//-------------------first class function ------------------------//

//  

// return , store , para- function pass 


//---------------------String literals--------------------------------//

    // function sum (par1 , par2){
    //     console.log(`my first is ${par1}  ${par2}`);
    // }

    // sum("abhishek" , "gupta");

//---IIFE----Immediately Invoked Function Expression-----------//

// let val = (function(a,b){
//   return a+b;
// })(3,4);

// console.log(val)

// var a = [1, 2];
// var ar = new Array(2);
// ar.push(2);
// ar[1] =3
// console.log(ar);

// console.log(arr);

//-------------------1- push() ----------------------------//  

// push always add value at the end or 
// we can say, its increase the length of the element which 
// we want to push to the lastindex(e) in array ex: we are pushing 1 element  
// and put element at a[e+1] and return length+1 value
// ex: original length =2 now it will retrun new updated array length

// let length = arr.push(3);  
// console.log(arr);
// console.log(length)
// length = arr.push(4,5,6);
// console.log(arr)
// console.log(length)


// <imp> we can directly half the array by modifing the length

// arr.length = arr.length/2
// console.log(arr)


//-------------------3- pop()----------------------------//  

// return the last element(pop element) of the Array and 
// decrease the array size by one

// let val = arr.pop();
// console.log(arr)
// console.log(val)


//-------------------4- unshift()----------------------------// 

// opposite of push  : we can add as much element in array in the starting
// const arr = [2,3];   
// let unshiftval = arr.unshift(5,6);
// console.log(arr) // 5,6,2,3
// console.log(unshiftval) //4


//-------------------5- shift()----------------------------//
// paihli biwi se hi khelega 
// opposite of pop()  return is first element and remove form array

// let shiftval = arr.shift();
// console.log(arr)
// console.log(shiftval)


//-------------------6- concat()----------------------------//

// new array return; 
// we can add array and elemet at a single time

// var arr2 = [9, 10]

// const new_arr =  arr.concat(arr2,12, 0)
// console.log(new_arr)

// const arr = new Array(2);

//-------------------7- fill()----------------------------// 

// update orginal array  and return it 

// // var arr = [1,4,7]
// var l = arr.fill(9);
// console.log(arr)
// console.log(l)


//-------------------8 - every----------------------------//

// retrun Boolean type if callback function satisfied  for every element 

// var arr = [2,4,2]
// let check = arr.every((itm)=> itm%2==0)

// // function newf(itm){
// //     return itm%2==0;
// // }
// // let check = arr.every(newf)

// console.log(check)


//-------------------9 - some---------------------------// 

// retrun Boolean type if callback function satisfied  for altest one element

// var arr = [2,4,2]
// check = arr.some((itm)=> itm%2==0)
// console.log(check)


//-------------------10 - find()---------------------------// 

// retrun the value from array if callback function
// satisfied  for altest one element

// const arr = [1, 3, 7, 3, 4, 6, 7]
// const fun = arr.find((item)=>item%2==0);

// console.log(fun);

//-------------------11 - findIndex()---------------------------// 

// retrun the index from array if callback function \
// satisfied  for altest one element

// val  = arr.findIndex(fun)
// console.log(val)

//-------------------12- IndexOf---------------------------//
// return the fisrt occurence of value from stating if not found -1;

// val = arr.indexOf(13)
//console.log(val)

//--------------12- lastIndexOf------------------------// 
// retrun the first occurence of value from last if not found -1;

// val = arr.lastIndexOf(3)
// console.log(val)


//--------------13- isArray------------------------// 

//console.log(Array.isArray("12"))


//--------------14- includes------------------------// 
// check weather the element is present return boolean 
// console.log(arr.includes(17))


//--------------15- flat()------------------------// 

// const arr2 = [1,2,[3,4,[5,6,[7,8]]]]
// console.log(arr2.flat(3))


//--------------16- from()--------------------// 

// static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 
// const s =new Set([1,1,2])
// const arr3 = Array.from(s);
// console.log(arr3)


//--------------17- join()--------------------// 

// add parameter b/w the element and return string type
// const arr = [1,2,3,4]
// const str = arr.join("-->")
// console.log(str)
// console.log(typeof str);


//--------------17- join()--------------------// 
// const subarray = arr.slice(2,6)
// console.log(subarray)

//--------------17- join()--------------------// 

// const arr = [3, 6, 23, 45, 32, 56, 76,89]
// let new_arr =  arr.splice(3,6, 1,2,3 )
// console.log(arr)

// const fun = (currvalue, currIndex, arr)=>{
//   console.log(`value at index[${currIndex}] = `,currvalue)
// }
// arr.forEach(fun)

// arr.sort((a,b)=> b-a)
// console.log(arr)

// map , filter, reduce