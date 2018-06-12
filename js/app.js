//SECTION 1

//1. The difference between interpolation and concatenation is
//interpolation can be used much more easily with longer strings.
//The syntax is also different.

//Interpolation: 
//var title = "On Dogs: Man's Best Friend";
//var author = "enlore";
//<p>Our subject for today's study is #{title}, written by #{author}</p>

//Concatenation:
//Using the same variables that have been established, concatenation
//will look like this:
//<p>Our subject for today's study is + "title" + written by + "author".</p>

//2. DON'T REPEAT YOURSELF. I feel like this should be a rule for linguistics in general.
// There are plenty of ways to tell if you are repeating code,
//including the simple "find" command.

//SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

var Kevin = e;


console.log(a !== b);
console.log(c > d);
console.log(e === e);
console.log(a + b === c);
console.log(a * a === d);
console.log(e === Kevin);
console.log(48 === 8 * 6);

//SECTION 3

//Loop one is infinte because there is no condition stopping the loop from re-executing.

//Loop two is not infinite because there is a condition that sets the loop to false, stopping it.

//The loop will make a set of 21 "A"s becuase in the increment starts at 0.
//I had anticipated that it would print 21 lines of sequentially incresing "A"s, until 21 total were presented.

//SECTION 4

//For loops you have to create a new variable. It allows you to run a specific function a given number of times.
//While loops can refer to any variable already within the code, and it will run as long as the specified condition is met.

for (let i = 0; i < 999;) {
	console.log(i++);
}

//The first part of the control statement establishes a variable.
//The second part of the control statement is the condition that must be met to end the loop.
//The third part of the control statement is the operation that happens to the variable in order to meet the condition.

for (let i = 999; i >= 0;) {
	console.log(i--);
}

for (let i = 1; i <= 10;) {
	console.log(`The value of i is: ${i++} of 10`);
}