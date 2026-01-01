//addition//
let a=2;
let b=3;
const c=(a+b);
console.log("Addition:"+c);

//subtraction//
let d=10;
let e=11;
const f=(d-e);
console.log("Subtraction:"+f);

//division//
let x=20;
let y=5;
const g=(x/y);
console.log("division:"+g)

//multiplication//
let t=4;
let u=4;
const h=(t*u);
console.log("multiplication:"+h);

//circle//
//area of circle= πr2
//r is the radius of the circle (distance from the center to the edge)
//π (pi) is approximately 3.1416
const r= 10;
const PI= 3.14
const area= (("Area of circle=") + PI * r*r);
console.log(area);

//rectangle//
//area of a rectangle= Area= length*width
//length=longer side
//width= shorter side
let length= 100;
let width =50;
const o =(length* width);
const Area =(("Area of a rectangle=") + o);
console.log(Area);

//cylinder//
//Lateral surface of a cylinder = curved side area only.
//area of cylinder(curved area only)= 2 * π * r * h
//total area of cylinder= 2πr(h+r)
//r= radius
//h= height
// value of π= 31.4

const radius= 4;
const height= 2;
const pi= 31.4;
const value=(("Lateral area of cylinder=")+ 2* pi* radius*height );
const total=(("Total area of a cylinder=")+2*pi*radius*(radius+height));
console.log(value);
console.log(total);


//NAN
let a5=10;
let a6="sai";
console.log(a5/a6);


//Ramesh and Suresh are two friends. Ramesh salary is 10,000 and Suresh Salary is 15,000.
//  I wanted ramesh and suresh salary increase by 25% hike.
//  Write a code where i see the total salary of Ramesh and suresh after 25% Hike.
//formula perc/100 *originalvalue

// Ramesh’s original salary = 10,000
//25% of 10,000 = 2,500
//total salary after the hike =10,000 + 2,500 = 12,500

//suresh original salary= 15,000
//25% of 15,000 = 3,750
//Total salary after the hike =15,000 + 3,750 = 18,750

let rameshsalary= 10000;
let sureshsalary= 15000;
let hikepercentage= 25
const Newsalaryoframesh = (((hikepercentage/100) * rameshsalary)+rameshsalary);
const Newsalaryofsuresh =(((hikepercentage/100) * sureshsalary)+sureshsalary);
console.log("salary of ramesh after hike=",Newsalaryoframesh);
console.log("salary of suresh after hike=", Newsalaryofsuresh);

