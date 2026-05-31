// node BasicsJS/07_DatesinJs.js
// Dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);



var myCreateDate=new Date(2026,0,23)
console.log(myCreateDate.toDateString());
  

var myCreateDate=new Date("January 23, 2026")
console.log(myCreateDate.toLocaleString());

var myCreateDate=new Date("2026-01-26")
console.log(myCreateDate.toLocaleString());

var myCreateDate = new Date(2026,0,23,5,3)
console.log(myCreateDate.toLocaleString());

var myCreateDate = new Date("2026-01-23")
console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

console.log(newDate.getDay());

newDate.toLocaleString('en-US',{
    weekday:'long'
})
