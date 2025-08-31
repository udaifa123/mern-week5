  //1    //synchronuos js
console.log("start");
function add(a,b){
    return a+b;
}
console.log(add(2,3));
console.log("End");

//2
//synchronous execution
console.log("step 1:Go to cafe");
console.log("step 2:Go to friends");
console.log("step 3:Eat to pizza");
console.log("step 4:Enjoy your friends");


//3
function work1(){
    console.log("work 1 completed");
}
function work2(){
    console.log("work 2 completed");
}
function work3(){
    console.log("work 3 completed");
}
work1();
work2();
work3();

//4
function greet(){
    console.log("Hello");
}
function mySelf(){
    console.log("My name is Udaifa");
}
function sayBye (){
    console.log("Goodbye")
}
greet();
mySelf();
sayBye();


//5
console.log("start cooking");
console.log("cooking biriyani");
console.log("boil water");
console.log("masala cooking");
console.log("mixing rice and masala");
console.log("serve food")

     //Asynchronuos js
//setTimeout(delay)
console.log("Helloo");
setTimeout(()=>{
      console.log("Heyy I am Udaifa");
},3000);
console.log("Byee")

//2
console.log("start");
setTimeout(()=>{
    console.log("Hi")
},0);
console.log("End")

//3
console.log("A");
setTimeout(()=>{
    console.log("B");
},1000);
setTimeout(()=>{
    console.log("C");
},0);
console.log("D");

//4
//setInterval(repeat)
let count=0;
let timer=setInterval(()=>{
    count++ ;
    console.log("Counter:",count);
    if(count===3){
        clearInterval(timer);
    }
},1000);

//promise
console.log("start");
let promise=new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise Done!"),1000);
});
promise.then((msg)=>console.log(msg));
console.log("End");

//async/await(cleaner way)
async function getData(){
    console.log("Fetching data...");
    let result=await new Promise((resolve)=>
    setTimeout(()=>resolve("Data received!"),2000)
    );
    console.log(result);
}
getData();
console.log("After calling getData")

   //execution context
var x=10;
function add(a,b){
    var result=a+b;
    return result;
}
console.log(add(4,5));

//globally
let y=10;
console.log(y);

//inside a function
function test(){
    'use strict';
    let y=20;
    return y;
}
console.log(test());

//Call stack visualization in DevTools
function first(){
    second();
    console.log("First done")
}
function second(){
    third();
    console.log("Second done");
}
function third(){
    console.log("Third done");
}
first();

      