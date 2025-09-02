// //    --------- //synchronuos----------------
// // console.log("start cooking");
// // console.log("cooking biriyani");
// // console.log("masala cooking");
// // console.log("mix rice and masala");
// // console.log("serve food");
// // console.log("eating food");

// //       //synchronuos
// // console.log("start");
// // function add(a,b){
// //   return a+b;
// // }
// // console.log(add(7,8));
// // console.log("end")
    
    
// //     //
// // console.log("start");
// // function add(x,y){
// //   return x+y;
// // }
// // console.log(add(8,8));
// // console.log('end")

// //       //
// // console.log("start");
// // function add(a,b){
// //   return a+b;
// // }
// // console.log(add(5,4));
// // console.log("end")
      
      
// //       //
// // function greet(){
// //   console.log("Hello");
// // }
// // function myself(){
// //   console.log("I'm Udaifa");
// // }
// // function saybye(){
// //   console.log("goodbye")
// // }
// // greet();
// // myself();
// // saybye()



// //                         //----------------asynchronuos----------------
// // console.log("helloo");
// // setTimeout(()=>{
// //   console.log("heyy i am udaifaa")
// // },2000);
// // console.log("byee")

// //         //
// // console.log("Heyy,how are u");
// // setTimeout(()=>{
// //   console.log("I am fine");
// // },3000);
// // console.log("wht about uu")



// //     //
// // console.log("A");
// // setTimeout(()=>{
// //   console.log("B");
// // },0);
// // console.log("C")

// //       //---------------execution context----------------
// // let name="udaifa";
// // function greet(){
// //   let msg="hello "+name;
// //   console.log(msg);
// // }
// // greet()


// // ------------------creation phase and execution phase--------------------
// // console.log(a);
// // sayhello();
// // var a=20;
// // function sayhello(){
// //   console.log("hello")
// // }

// //       //
// // console.log(x);
// // sayhello();
// // var x=30;
// // function sayhello(){
// //   console.log("udaifa");
// // }


//       //--------------//------------------
// // console.log(a);
// // greet();
// // var a=80;
// // function greet(){
// //   console.log("udaifa")
// // }
 
 
// //       //------------------strict mode
// // x=10;
// // console.log(x)

//       //------------------
// // function test(){
// // "strict use";
// // x=10;
// // }
// // console.log(x)

//       //call stack visualization divtools
// // function first(){
// //   second();
// //   console.log("udaifa")
// // }
// // function second(){
// //   third();
// //   console.log("ubaid")
// // }function third(){
// //   console.log("unaisa");
// // }
// // first()


// // function first(){
// //   second();
// //   console.log("A")
// // }
// // function second(){
// //   third();
// //   console.log("B")
// // }
// // function third(){
// //   console.log("C")
// // }
// // first()





// //
// // function greet(){
// //   sayName("udaifa");
// // }
// // function sayName(name){
// //   sayHello(name);
// // }
// // function sayHello(name){
// //   console.log("hello "+name)
// // }
// // greet()


// //
// // function greet(){
// //   sayname("udaifa");
// // }
// // function sayname(name){
// //   sayhello(name)
// // }
// // function sayhello(name){
// //   console.log("hello "+name)
// // }
// // greet()


//     //--------------temporal dead zone
// // console.log(a);
// // let a=10;
      
// //       //
// // console.log(x);
// // var x=5;
// // console.log(y);
// // let y=10;

//     //
// // console.log(z);
// // const z=20;

     
// // console.log(b);
// // var b=90;


// //     //-------exceptio handlig(try...catch)
// // try{
// //   let a=400;
// //   console.log(a);
// //   console.log(b);
// // }catch(err){
// //   console.log("caught:",err.message)
// // }


//       //-------shadowing
// // let x=10;
// // function test(){
// //   let x=20;
// //   console.log(x);
// // }
// // test()


//       //
// // let a=500;
// // function test(){
// //   let a=900;
// //   console.log(a)
// // }
// // test()

// //     //--------------illegal shadowing----
// // let y=7;
// // {
// //   var y=8;
// // }

//   //
// // const z=10;
// // {
// //   var z=20;
// // }


// //     //----legal shadowing-------
// // let a=100;
// // {
// //   let a=200;
// //   console.log(a);
// // }
// // console.log(a)


// //     //------fetch API-----
// // fetch("https://jsonplaceholder.typicode.com/posts/1")
// // .then(response=>response.json())
// // .then(data=>console.log(data))
// // .catch(error=>console.log("Error:",error))

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => console.log(json))
// //       .catch(error=>console.log("Error:",error))


// //       //-----------square pattern----------
// // function squarePattern(n){
// //   for(let i=0;i<n;i++){
// //     console.log("*".repeat(n));
// //   }
// // }
// // squarePattern(4)

// //
// // function squarePattern(n){
// //   for(let i=0;i<n;i++){
// //     console.log("*".repeat(n))
// //   }
// // }
// // squarePattern(4)

// //       //-----righttriangle------
// // function rightTriangle(n){
// //   for(let i=0;i<n;i++){
// //     console.log("*".repeat(i))
// //   }
// // }
// // rightTriangle(5)

// // //
// // function rightTriangle(n){
// //   for(let i=0;i<n;i++){
// //     console.log("*".repeat(i))
// //   }
// // }
// // rightTriangle(5)


// //pyramid-------------
// // function pyramid(n){
// //   for(let i=0;i<n;i++){
// //     let spaces=" ".repeat(n-i);
// //     let stars="*".repeat(i)
// //     console.log(spaces+stars);
// //   }
// // }
// // pyramid(5)

// //       //-------type coercion---------
// // console.log("5"+2);
// // console.log("5"-2);
// // console.log("79"+90)
// // console.log("2"-1)
// // console.log(true+1)
// // console.log(true-1)
// // console.log("10"*2)      
// // console.log("10"/"2")
// // console.log(Number(""))
      



// //     //--------MEMORY LEAK------------
// // function leak(){
// //   bigData=new Array(10000).fill("😍");
// //   console.log(bigData)
// // }
// // leak()


// //

// // function leak(){
// //   bigData=new Array(20000).fill("heyy👋");
// //   console.log(bigData);
// // }
// // leak()



// //-----------stack overflow
// // function greet(){
// //   function greet()
// // }
// // function greet()


// // //-------stack overflow-----------
// // let stack=[];
// // console.log(stack.pop())


// // //-----------object and classes-------------
// // let person={
// //   name:"udaifa",
// //   age:18,
// //   greet:function(){
// //   console.log("hello,my name is "+this.name);
// // }
// // };
// // console.log(person.name);
// // person.greet()


// // //--------------class--------
// // class Flower{
// //   constructor(name,color){
// //     this.name=name;
// //     this.color=color;
// //   }
// //   smell(){
// //     console.log(this.name +" "+this.color+ " smelled");
// //   }
// // }
// // let flower1=new Flower("jasmine","white");
// // let flower2=new Flower("rose","pink");

// // flower1.smell();
// // flower2.smell()


// // //
// // class Fruit{
// //   constructor(name,color){
// //     this.name=name;
// //     this.color=color;
// //   }
// //   taste(){
// //     console.log(this.name+" "+this.color+" tasted");
// //   }
// // }
// // let fruit1=new Fruit("cherry","sour");
// // let fruit2=new Fruit("mango ","sweet");
// // fruit1.taste();
// // fruit2.taste()



// // //---------shallow copy-----------
// // let original=[1,2,[3,4]];
// // let shallowcopy=original.slice();
// // shallowcopy[2][0]=77;
// // console.log("original",original);
// // console.log("shallowcopy",shallowcopy)



// //
// let arr=[1,2,3,4];
// let shallowcopy=arr;
// shallowcopy.push(5);
// shallowcopy[0]=77;
// console.log("original",arr);
// console.log('shallowcopy',shallowcopy)

// // //
// // let arr=[1,2,3,4,5];
// // let shallowcopy=arr;
// // shallowcopy.push(6);
// // shallowcopy[3]=99;
// // console.log("original",arr);
// // console.log("shallowcopy",shallowcopy)   


// // //
// // let zaitoon=["udaifa","sulthana","ayrin","hadiya"];
// // let shallowcopy=zaitoon;
// // shallowcopy.push("wafa");
// // shallowcopy[2]=("hasna");
// // console.log("original",zaitoon);
// // console.log("shallowcopy",shallowcopy)

//       //-------------deep copy------------
// // let numbers=[1,2,3,4,5,6];
// // let deepcopy=[...numbers];
// // deepcopy[0]=99;
// // deepcopy.pop()
// // console.log("original",numbers);
// // console.log("deepcopy",deepcopy)

// //
// // let fruit=["apple","orange","banana","pineapple","watermelon"];
// // let deepcopy=[...fruit]
// // deepcopy[2]=("kiwi");
// // deepcopy.pop();
// // console.log("original",fruit);
// // console.log("deepcopy",deepcopy)

// // //
// // let letters=["a","b","c","d","e","f"];
// // let deepcopy=[...letters];
// // deepcopy.push("g","h");
// // console.log("original",letters);
// // console.log("deepcopy",deepcopy)


// // //
// // let animals=["cat","dog","rabbit","tiger","cow"];
// // let deepcopy=[...animals];
// // deepcopy.push("lion","buffallow");
// // deepcopy.pop();
// // deepcopy[1]=("fox")
// // console.log("original",animals);
// // console.log("deepcopy",deepcopy)


// //
// // class Zaitoon{
// //   constructor(name){
// //     this.name=name;
// //   }
// // }
// // let zaitoon1=new Zaitoon("udaifa");
// // let zaitoon2=new Zaitoon("sulthana");
// // console.log(zaitoon1.name)
// // console.log(zaitoon2.name)


// //
// // class Drink{
// //   constructor(name){
// //     this.name=name;
// //   }
// // }
// // let drink1=new Drink("mojito");
// // let drink2=new Drink("sarbath");
// // console.log(drink1.name);
// // console.log(drink2.name)


// //-----------prototype--------------
// // function Person(name){
// //   this.name=name;
// // }
// //   Person.prototype.greet=function(){
// //     console.log("heyy "+this.name)
// // };
// // let p1=new Person("udaifa");
// // let p2=new Person("ayrin");
// // p1.greet();
// // p2.greet()

// // //
// // function Person(name){
// //   this.name=name;
// // }
// // Person.prototype.greet=function(){
// //   console.log("heyy "+this.name);
// // };
// // let p1=new Person("ayshaa");
// // let p2=new Person("marwa");
// // p1.greet();
// // p2.greet()


// // ----------memoization--------------
// // function add(a,b){
// //   console.log("calculating....")
// //   return(a+b)
// // }
// // function greet(){
// //   let cache={};
// //   return function(a,b){
// //     if(cache[a,b]){
// //       console.log("recent...")
// //       return(cache[a,b])
// //     }else{
// //       let result=add(a,b);
// //       cache[a,b]=result;
// //       return result;
// //     }
// //   }
// // }
// // let num=greet();
// // console.log(num(6,8));
// // console.log(num(6,9));
// // console.log(num(6,8))


// //
// // let cache = {};

// // function add(a, b) {
// //   const key = a + b;
// //   return cache[key] || (console.log("calculating..."), cache[key] = a + b);
// // }

// // console.log(add(3, 4));
// // console.log(add(6, 8));
// // console.log(add(8, 2));
// // console.log(add(3, 4));

// //----------memoization------

// // let cache={};
// // function add(a,b){
// //   const key=a+b;
// //   return cache[key] || (console.log("calculating..."),cache[key]=a+b);
// // }
// // console.log(add(4,6));
// // console.log(add(6,7));
// // console.log(add(7,8));
// // console.log(add(4,6))


// // //
// // let cache={};
// // function multiply(x,y){
// //   const key=x*y;
// //   return cache[key] || (console.log("calculating..."),cache[key]=x*y);
// // }
// // console.log(multiply(8,9));
// // console.log(multiply(3,9));
// // console.log(multiply(8,9))
          

// //
// // let cache={};
// // function add(a,b){
// //   let key=a+b;
// //   return cache[key] || (console.log("calculating..."),cache[key]=a+b);
  
// // }
// // console.log(add(7,9));
// // console.log(add(8,5));
// // console.log(add(7,9))


// // //
// // let cache={};
// // function add(a,b){
// //   let key=a+b;
// //   return cache[key] || (console.log("calculating..."),cache[key]=a+b);
// // }
// // console.log(add(5,4));
// // console.log(add(3,7));
// // console.log(add(5,4))


// //-------------allocation--------
// // let x=200;
// // let arr=[1,2,3,4];
// // console.log(x);
// // console.log(arr)

// //--------deallocation---------------
// // let obj={name:"udaifa",age:18}
// // obj=null;
// // console.log(obj)

// //----------constructor-------------------
// // class Person{
// //   constructor(name,age){
// //     this.name=name;
// //     this.age=age;
// //   }
// // }
// // let person1=new Person("udaifa",18);
// // console.log(person1.name);
// // console.log(person1.age)

//   


// // function first() {
// //   console.log("Inside first()");
// //   second();
// //   console.log("Exiting first()");
// // }

// // function second() {
// //   console.log("Inside second()");
// //   third();
// //   console.log("Exiting second()");
// // }

// // function third() {
// //   console.log("Inside third()");
// // }

// // first();







































