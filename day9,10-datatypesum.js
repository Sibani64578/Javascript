//Primitive
    //String,Number,Boolearn,null,undefinde,symbol,Bigint
// js is a dynamice type language
const score =100
const score_value=100.3

const isLoggesIn=false;
const outsideTemp=null// null
let user_email;//undefinde

const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id === anotherID);

//const bignumber=578645464246634

//Non-Primitive or referance type
 //Array,Objcts,function

const heros=["shaibi",'naagraj','doga']

let my_obj={
    name:"nayak",
    age:22,
}

const my_function=function(){
    console.log("Hello shibai");
}

console.log(typeof my_function);


// Stack(Primitive),Heap(Non_primitive)
let my_youtubename="nayakhfrot"
anotherr_name=my_youtubename

anotherr_name="chai aur code"
console.log(anotherr_name);
console.log(my_youtubename);

let user={
    email:"nayak@gooage.com",
    upi:"user@ybl"
}
let user_two = user

user_two.email = "hites@gmail.com"
console.log(user);
console.log(user_two);