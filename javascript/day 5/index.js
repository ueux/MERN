/*-----------class---------*/

// let obj={
//     name:'Harsh',
//     name2:'Radhika',
//     email:"hemenderkumar3000@gmail.com",
//     printName(){
//         console.log(this)     //we can access current object through this  //current object -> jiske andar ho
//     },
//     // printEmail:function(){
//     //     console.log(this.email)
//     // },
//     // printName2:()=>{
//     //     console.log(this.name2)  //undefined
//     // }
// }
// obj.printName()


// function Product(name,price){            //use to make multiple objects
//     console.log(this)
//     this.name=name
//     this.price=price
//     console.log(this)             //returns implecitly without return keyword
//     // return this
//     //return 465
//     // return {no:488,bf:'nj'}
//     this.productName=function(){
//         console.log(this.name);
//     }
// }
// let p1=new Product('iphone 14',142800)
// let p2=new Product('iphone 14 pro',242800)

// // same funtionality but different syntax 
// class Product{
//     category='electronics'        //added to the object , no need for let
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
//     productName(){                //no need for function keyword
//         console.log(this.name)
//     }
// }

// let p1=new Product('samsung',23456);
// console.log(p1)


//  class User{
//     // name      
//     // rollNo
//     constructor(name,rollNo){
//         console.log("hello")
//         this.name=name
//         this.rollNo=rollNo
//     }
//     // constructor(name){  //a class can have one constructor

//     // }
//     printName(){
//         return(this.name)
//     }
//     setName(name){
//         console.log("name is set")
//         this.name=name
//     }
//  }
//  let n=new User ()      //makes an object of type User & calls the default constructor
//  console.log(n)
//  let n2=new User ('harsh',4545)      //makes an object of type User & calls the constructor
//  console.log(n2)
//  n.setName("Radhika")
//  console.log(n)
//  console.log(n.printName())

/*-------------prototype-----------------*/

// let str = 'nishant'
// console.log(str)

// let arr = [1, 2, 3];

// let num = 21;
// let x = {};

// Object.prototype.print = function () {
//     console.log("from object proto");
// };

// Array.prototype.forArr = function (arr) {
//     for (let index = 0; index < arr.length; index++) {
//         console.log(arr[index]);
//     }
// };

// arr.print();
// arr.forArr(arr);
// function fun1() {}

// console.log(arr)
// arr.print()
// console.log(num.__proto__.constructor)
// num.print()
// console.log(x.__proto__)


// let arrr333 = [123,234,53,25,14,421]

// arrr333.forArr(arrr333)

// let a1 = {}

// a1.heelo = function(){
//     console.log("kya hal hai")
// }

// let a2 = {}
// Object.setPrototypeOf(a2,a1)

// console.log(a1)
// console.log(a2)


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }



// let newProduct = new Product("Tablet", 13244);
// newProduct.__proto__.hello = function () {
//     console.log("helloo new product");
// };
// Product.prototype.print = function () {
//     console.log("heelo");
// };
// console.log(newProduct);

/*--------------call,apply,bind-------------*/

// let student = {
//     name: "Nishant",
//     rollNo: 1322134,
// };
// let student2 = {
//     name: "Arin",
//     rollNo: 3253535,
// };
// let student3 = {
//     name: "Arjun",
//     rollNo: 564352,
// };

// function printInfo(branch, cgpa) {
//     console.log(this);
//     console.log(
//         `Name : ${this.name} , Roll No. : ${this.rollNo} , Branch : ${branch} , CGPA  : ${cgpa}`
//     );
// }
// // printInfo.call(student2, "CSE", "9.11");
// // printInfo.call(student3, "IT", "6.9");

// // printInfo.apply(student3, ["IT", "6.9"]);

// let newInfo =  printInfo.bind(student3, "IT", "6.9");
// newInfo();


// function Category(category) {
//     this.category = category;
// }

// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     Category.call(this,category);
// }

// let newFood = new Food("Pizza", 1234, "fast food");
// console.log(newFood);


/*--------inheritence----------*/

// let obj1 = { a: 5 };

// // console.log(ob1)

// // let obj2 = Object.create(ob1)

// // console.log(obj2.a)

// let c = {};
// let d = Object.create(obj1, { name: { value: "Nishant" } });
// // d.name = "Nishant";
// console.log(d);


// function Category(category) {
//     this.category = category;
// }

// Category.prototype.printHello = function () {
//     console.log("heello");
// };

// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     Category.call(this, category);
// }

// Food.prototype = Object.create(Category.prototype);

// let newFood = new Food("Pizza", 1234, "fast food");
// newFood.printHello();


// class Category {
//     constructor(category) {
//         this.category = category;
//     }

//     printHello() {
//         console.log("heello");
//     }
// }

// class Food extends Category {
//     constructor(name, price, category) {
//         super(category).printHello();
//         this.name = name;
//         this.price = price;
//     }
// }

// let newFood = new Food("Burger", 1321, "Fast Food");
// // newFood;