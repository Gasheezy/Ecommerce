//------Grading System with ternary operators----
let grade = 52;

console.log(
    grade <=100 && grade >=80
    ? 'A+'
    : grade <=79 && grade >=70
    ? 'A'
    : grade <=69 && grade >=60
    ? 'A-'
    : grade <=59 && grade >=50
    ? 'B'
    : grade <=49 && grade >=40
    ? 'C'
    : grade <=39 && grade >=33
    ? 'D'
    : grade <=32 && grade >=0
    ? 'F'
    :'Invalid'
    );

/*
//------Fizz Buzz Exercise with ternary operators----
let number = 15;

console.log(
    number % 3 === 0 && number % 5 === 0
    ? 'FizzBuzz'
    : number % 3 === 0
    ? 'Fizz'
    : number % 5 === 0
    ? 'Buzz'
    :'Nothing'
    );


//------Fizz Buzz Exercise----
//Take a number
//It divisible by 3, print Fizz
//If divisible by 5, print Buzz,
//If divisible by both 3 and 5, print FizzBuzz
//Otherwise, print nothing

let number = 12;

if (number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz');
} else if(number % 5 === 0){
    console.log('Buzz');
} else if(number % 3 === 0){
    console.log('Fizz');
}else{
    console.log('Nothing');
}

//------Ternary Operator------
let num1 = 10;
let num2 = 5;

let max = num1 < num2 ? num1 : num2; //if else statement
console.log(max);

//------Swap 2 Numbers----
let apple = 10;
let orange  = 30;

let temp = apple;
apple = orange;
orange = temp;

console.log(apple,orange);

//----------Operators--------
let price = 200;

console.log(price === 200);
console.log(price >= 300);
console.log(!(price>50));

//------Exercise----
let person = {
    name : 'Mungai',
    age : 28,
    isMarried : true,
    
    homeAddress:{
        long : 44.55,
        lat : 33.44,
    },
    friends : ['Prime', 'Zara', 'Nimo'],
};
console.log(person);
console.log(person.name);
console.log(person.homeAddress.lat);



/*
//------Template Literals----
let name = 'Mungai';
console.log('My name is ' +name);
console.log('${30+20}'); //not working

//------Functions----
function showMyName(name){
    //console.log(name);
    console.log('My name is ' +name);
}
showMyName('Mungai');
showMyName('Prime');
showMyName('Zara');

function calcSum(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result =  calcSum(30,20);
console.log(result);

//------JavaScript Array----
let friends = ['Jeff', 'Kim', 'Sam', 'Vee']
console.log(friends);
console.log(typeof friends);
console.log(friends.length);

//------Objects----
let user = {
    name : 'Mungai',
    age : 40,
    hobby : 'Reading',
};
console.log(user.name);
console.log(user['hobby']);

//------Practice on printing data types----
let age = 45;
console.log(typeof age);

let isMarried = false;
console.log(typeof isMarried);

let colors = undefined;
console.log(colors);

let selectColor = null;
console.log(typeof selectColor);
*/



