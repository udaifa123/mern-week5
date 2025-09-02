//synchronuos--------------
// console.log("start");
// function add(a,b){
//   return a+b;
// }
// console.log(add(9,3));
// console.log("end")


// //---------------synchronuos------------
// console.log("start");
// setTimeout(()=>{
//   console.log("inside timeout");
// },2000);
// console.log("end")

//--------------promises----------
// console.log("1");
// Promise.resolve().then(()=>{
//   console.log("2");
// });
// console.log("3")

//synchronuos--------------with function------------
// function greet(name){
// return "hello "+name;
// }
// console.log(greet("udaifa"));
// console.log("done")


//-------------------execution context
// var a=30;
// function add(a,b){
//   return a+b;
// }
// console.log(a);
// console.log(add(4,6))


//--------------callstack----------------

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


// //
// function first(){
//   console.log("inside first()");
//   second();
//   console.log("outside first()")
// }
// function second(){
//   console.log("inside second()");
//   third();
//   console.log("outside second()")
// }
// function third(){
//   console.log("inside third")
// }

//------------tdz---------------
// console.log(a);
// let a=10;

// let a=10;
// console.log(a)

//---------------exception handling try catch---------------
// try{
//   let a=300;
//   console.log(a);
//   console.log(b);
// }catch (err){
//   console.log("caught:",err.message)
// }




////
// try{
//   let a=900;
//   console.log(a);
//   console.log(b);
// }catch(err){
//   console.log("caught:",err.message)
// }


//------------shadowing----------
// let x=100;
// function test(){
//   let y=200;
//   console.log(y)
// };
// test()

//-----------illegal shadowing--------------
// let a=10,
// {
//   var a=20
// }


//--------------legal shadoeing-------------
// let z=100;
// {
//   let z=200;
//   console.log(z)
// }
// console.log(z)
//
// let a=700;
// {
//   let a=900;
//   console.log(a);
// }
// console.log(a)

//------------type coercion------------
// console.log("9"+3)




//--------------memory leak----------------
// function leak(){
//   bigData=new Array(7000).fill("😍❤️");
//   console.log(bigData);
// }
// leak()

//
// function leak(){
//   bigData=new Array(2000).fill("😻");
//   console.log(bigData)
// }
// leak()



//-----------stack overflow-------------
// function greet(){
//   greet();
// }
// greet()


//------------------stack overflow-------------
// let stack=[];
// console.log(stack.pop())


//
// let a=[];
// console.log(a.pop())


//------------object---------------
// let person={
//   name:"udaifa",
//   age:18,
//   greet:function(){
//     console.log("hello,my name is "+this.name)
//   }
// };
// console.log(person.name);
// person.greet()


//
// let person={
//   name:"udaifa",
//   age:18,
//   greet:function(){
//     console.log("hello,my name is "+this.name);
//   }
// };
// console.log(person.name)
// person.greet()

//-------------classes------------
// class Fruit{
//   constructor(name,color){
//   this.name=name;
//   this.color=color;
// }
// taste(){
// console.log(this.name+ " "this.color+ "tasted");
// }
// }
// let.fruit1=new Fruit("mango","yellow");
// let.fruit2=new Fruit("cherry","red");
// fruit1.taste();
// fruit2.taste()

// class Flower{
//   constructor(name,color){
//     this.name=name;
//     this.color=color;
//   }
//   smell(){
//     console.log(this.name +" "+this.color+ " smelled");
//   }
// }
// let flower1=new Flower("jasmine","white");
// let flower2=new Flower("rose","pink");

// flower1.smell();
// flower2.smell()


// //--------------shallow copy---------------
let arr=[1,2,3,4,5];
let shallowcopy=arr;
shallowcopy.push(6);
shallowcopy[0]=77;
console.log("original",arr);
console.log("shallowcopy",shallowcopy)


//
let numbers=[1,2,3,4,5,6];
let deepcopy=[...numbers];
deepcopy[0]=[88];
console.log("original",numbers);
console.log("deepcopy",deepcopy)








































