// //function---------promise--------------
// //-------------function---------------
// function add(a,b){
//   return a+b;
// }
// console.log(add(6,8))



// //function-----------------promise-------------------
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(4,3).then(result=>console.log(result));

//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(5,7).then((result=>console.log(result)))

//------------with async keyword shortcut-------------
// async function addAsync(a,b){
//   return a+b;
// }
// addAsync(5,8).then((result=>console.log(result)))

// //
// async function addAsync(x,y){
//   return x+y;
// }
// addAsync(6,9).then((result=>console.log(result)))


//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   }) 
// }
// addAsync(5,9).then((result=>console.log(result)))
    
    
//     //
// async function addAsync(x,y){
//   return x+y;
// }
// addAsync(5,8).then((result=>console.log(result)))


// //------------
// function addAsync(a,b){
//   return new Promise((resolve)=>{
//     setTimeout(()=>resolve(a+b),1000);
//   });
// }
// addAsync(6,8).then((result=>console.log(result)))


//-------------function callstack----------------
// function greet(){
//   console.log("udaifa");
// }
// greet()


// //
// function one(){
//   two();
// }
// function two(){
//   third()
// }
// function third(){
//   console.log("udaifaa")
// }
// one();


//
// function one(){
//   console.log("heyy");
//   second();
//   console.log("udaifa");
// }
// function second(){
// console.log("hloo");
// third();
// console.log("ubaid");
// }
// function third(){
//   console.log("unaisa")
// }
// one()




// function first() {
//   console.log("Inside first()");
//   second();
//   console.log("Exiting first()");
// }

// function second() {
//   console.log("Inside second()");
//   third();
//   console.log("Exiting second()");
// }

// function third() {
//   console.log("Inside third()");
// }

// first();




// ///-----------function convert to cakkback-----------
// function add(a,b){
//   return a+b;
// }
// console.log(add(5,9))


//-----------callback--------------
// function calculate(a,b,callback){
//   let result=a+b;
//   callback(result);
// }
// calculate(9,6,function(ans){
//   console.log(ans);
// });


//--------------callback--------------
// function greet(name,callback){
//   console.log("Hello "+name);
//   callback();
// }
// greet("marwa",function(){
//   console.log("how are u")
// })

// function greet(name,callback){
//   console.log("hello "+name);
//   callback();
// }
// greet("zayn",function(){
//   console.log("wht hpnd!!")
// })


//
// function sayhello(name,callback){
//   console.log("heyy "+name);
//   callback();
// }
// sayhello("zada",function(){
//   console.log("how are you!")
// })

//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(9,8).then((result=>console.log(result)))



// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   }) ;
// }
// addAsync(8,5).then((result=>console.log(result)))


// //
// function greet(){
//   console.log("hello")
// }
// greet()

// function one(){
//   console.log("first");
//   two();
//   console.log("A")
// }
// function two(){
//   console.log("second");
//   third();
//   console.log("B");
// }
// function third(){
//   console.log("C")
// }
// one()
//------------

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("Error:",err))



//------------generator function----------------
function* trafficSignal(){
  yield "Red-stop🚦";
  yield "Yellow-ready⚠️";
  yield "Green-Go🟢";
}
let signal=trafficSignal();
console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);










// //function---------promise--------------
// //-------------function---------------
// function add(a,b){
//   return a+b;
// }
// console.log(add(6,8))



// //function-----------------promise-------------------
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(4,3).then(result=>console.log(result));

//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(5,7).then((result=>console.log(result)))

//------------with async keyword shortcut-------------
// async function addAsync(a,b){
//   return a+b;
// }
// addAsync(5,8).then((result=>console.log(result)))

// //
// async function addAsync(x,y){
//   return x+y;
// }
// addAsync(6,9).then((result=>console.log(result)))


//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   }) 
// }
// addAsync(5,9).then((result=>console.log(result)))
    
    
//     //
// async function addAsync(x,y){
//   return x+y;
// }
// addAsync(5,8).then((result=>console.log(result)))


// //------------
// function addAsync(a,b){
//   return new Promise((resolve)=>{
//     setTimeout(()=>resolve(a+b),1000);
//   });
// }
// addAsync(6,8).then((result=>console.log(result)))


//-------------function callstack----------------
// function greet(){
//   console.log("udaifa");
// }
// greet()


// //
// function one(){
//   two();
// }
// function two(){
//   third()
// }
// function third(){
//   console.log("udaifaa")
// }
// one();


//
// function one(){
//   console.log("heyy");
//   second();
//   console.log("udaifa");
// }
// function second(){
// console.log("hloo");
// third();
// console.log("ubaid");
// }
// function third(){
//   console.log("unaisa")
// }
// one()




// function first() {
//   console.log("Inside first()");
//   second();
//   console.log("Exiting first()");
// }

// function second() {
//   console.log("Inside second()");
//   third();
//   console.log("Exiting second()");
// }

// function third() {
//   console.log("Inside third()");
// }

// first();




// ///-----------function convert to cakkback-----------
// function add(a,b){
//   return a+b;
// }
// console.log(add(5,9))


//-----------callback--------------
// function calculate(a,b,callback){
//   let result=a+b;
//   callback(result);
// }
// calculate(9,6,function(ans){
//   console.log(ans);
// });


//--------------callback--------------
// function greet(name,callback){
//   console.log("Hello "+name);
//   callback();
// }
// greet("marwa",function(){
//   console.log("how are u")
// })

// function greet(name,callback){
//   console.log("hello "+name);
//   callback();
// }
// greet("zayn",function(){
//   console.log("wht hpnd!!")
// })


//
// function sayhello(name,callback){
//   console.log("heyy "+name);
//   callback();
// }
// sayhello("zada",function(){
//   console.log("how are you!")
// })

//
// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   });
// }
// addAsync(9,8).then((result=>console.log(result)))



// function addAsync(a,b){
//   return new Promise((resolve,reject)=>{
//     resolve(a+b);
//   }) ;
// }
// addAsync(8,5).then((result=>console.log(result)))


// //
// function greet(){
//   console.log("hello")
// }
// greet()

// function one(){
//   console.log("first");
//   two();
//   console.log("A")
// }
// function two(){
//   console.log("second");
//   third();
//   console.log("B");
// }
// function third(){
//   console.log("C")
// }
// one()
//------------

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("Error:",err))



//------------generator function----------------
function* trafficSignal(){
  yield "Red-stop🚦";
  yield "Yellow-ready⚠️";
  yield "Green-Go🟢";
}
let Signal=trafficSignal();
console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);
console.log(signal.next().value);












