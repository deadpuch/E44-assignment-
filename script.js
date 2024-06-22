let a = 10;
let b = 10;

console.log(a + b);

// area of rectangle

let width = 12;
let height = 6;

console.log((area = width * height));

// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

let age1 = 26;

if (age1 >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

let mark = 60;

if (mark >= 60) {
  console.log("pass");
} else {
  console.log("fail");
}

// Implement a program that checks if a user's entered number is positive, negative, or zero.

let number = 0;

if (number > 0) {
  console.log("postive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

let age =12;

if (age <= 12) {
  console.log("Child");
} else if (age <= 19 && age >= 13) {
  console.log("Teenager");
} else if (age <= 59 && age >= 20) {
  console.log("Adult");
} else {
  console.log("Senior");
}


// find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let array=[1,3,9,12,15,18,21]

for(i=0;i<array.length;i++){

console.log(array[i]*array[i]);

}

// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

let sum=0

for(i=0;i<=10;i++){
  if(i%2!==0){
   
    sum=sum+i;
  }
}

console.log(sum);

