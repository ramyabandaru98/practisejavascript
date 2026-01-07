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

//using Functions
//addition
//plain function
function addition(){
    let a=3;
    let b=3;
    const g= (a+b)
    console.log("addition with plain function:",g)
}
addition()

//parameterzied function
function add(a,b){
    const x= a+b;
    console.log("addition with parameter:", x);
   }
add(3,3)

//arrow function
const k = (a,b) => a+b;
 {
      console.log("addition with arrow function:" , k(3,3));
  }

 //using Functions
//subtraction
//plain function

function Subtraction(){
    let a= 3;
    let b= 3;
    const d= (a-b);
    console.log("subtraction with plain function:",d);
    
}
Subtraction()

//parameterzied function
function sub(a,b){
    const f= (a-b)
    console.log("subtraction with parameterzied function:", f)
}
sub(3,3)

//arrow function
const j = (a,b) => a-b;
 console.log("subtraction with arrow function:",j(3,3));

 //division//
 //plain function
 function division(){
    let a=20;
    let b=12;
    const div= (a%b);
    console.log("plain function with division:", div)
 }
division()

//parameterzied function
function div(a,b){
    const h = (a%b)
    console.log("parameterized function with division:", h)
}
div(3,3)
//arrow function
const di=(a,b)=>a%b;
console.log("arrow function with arrow function:",di(3,3));

//multiplication//
//plain function
function multiplication(){
    let a=3;
    let b=3;
    const m=(a*b)
    console.log("multiplication with plain function:",m)
}
multiplication()

//parameterzied function
function mul(a,b){
    const u=(a*b);
    console.log("multiplication with parameterzied:",u)
}
mul(3,3)

//arrow function
const l=(a,b)=> a*b;
console.log("multiplication with arrow function:", l(3,3))


//circle//
//area of circle= πr2
//r is the radius of the circle (distance from the center to the edge)
//π (pi) is approximately 3.1416
//plain function
function circle(){
    let r= 10;
    const PI= 3.14;
    const area= (("Area of circle with plain function:")+ PI * r*r)
    console.log(area)
}
circle()

//parameterzied function 

function ci(r,PI){
    const area= (("Area of circle with parameterzied function:")+ PI * r*r)
    console.log(area)
}
ci(10,3.14)

//arrow function
const cir = (r,PI) => (PI * r*r);
console.log("Area of circle with arrow function:", cir(10,3.14))

//rectangle//
//plain functiom
function rectangle(){
    const length=100;
    const width=50;
    console.log("area of rectangle with plain function:",(length*width));
}
rectangle()

//parameterzied function 
function rect(length,width){
    const h= length*width;
    console.log("area of rectangle with parameter function:",h);
}
rect(100,50)

//arrow function
const re=(length, width)=> length*width;
console.log("area of rectangle with arrow function:",re(100,50));

//cylinder
//plain function

function cylinder(){
const radius= 4;
const height= 2;
const pi= 31.4;
const value=(("Lateral area of cylinder with plain function=")+ 2* pi* radius*height );
const total=(("Total area of a cylinderwith plain function=")+2*pi*radius*(radius+height));
console.log(value);
console.log(total);
}
cylinder()

//parameterzied function 
function cy(radius,height,pi){
    const value = (("Lateral area of cylinder with parameterized=")+ 2* pi* radius*height );
    const total=(("Total area of a cylinder with parameterized =")+2*pi*radius*(radius+height));
    console.log(value);
    console.log(total);
}
cy(4,2,31.4)

//arrow function
const cy1 =(radius,height,pi)=> (2* pi* radius*height);
const cy2=(radius,height,pi)=> (2*pi*radius*(radius+height));
 console.log("Lateral area of cylinder with arrow function:",cy1(4,2,31.4));
 console.log("Total area of a cylinder with arrow function:",cy2(4,2,31.4));


 //using functions
function sal(){
 let rameshsalary= 10000;
let sureshsalary= 15000;
let hikepercentage= 25
const Newsalaryoframesh = (((hikepercentage/100) * rameshsalary)+rameshsalary);
const Newsalaryofsuresh =(((hikepercentage/100) * sureshsalary)+sureshsalary);
console.log("salary of ramesh after hike using functions =",Newsalaryoframesh);
console.log("salary of suresh after hike using functions=", Newsalaryofsuresh);
}
sal()

//parameterzied function 
function sa(rameshsalary,sureshsalary,hikepercentage){
const Newsalaryoframesh = (((hikepercentage/100) * rameshsalary)+rameshsalary);
const Newsalaryofsuresh =(((hikepercentage/100) * sureshsalary)+sureshsalary);
console.log("salary of ramesh after hike using parameterized =",Newsalaryoframesh);
console.log("salary of suresh after hike using parameterized =", Newsalaryofsuresh);
}
sa(10000,15000,25)

//arrow function
const ra=(hikepercentage,rameshsalary,)=>(((hikepercentage/100) * rameshsalary)+rameshsalary);
const su=(hikepercentage,sureshsalary,)=>(((hikepercentage/100) * sureshsalary)+sureshsalary);
console.log("salary of ramesh after hike using arrow function =",ra(25,10000));
console.log("salary of suresh after hike using arrow function =",su(25,15000));



