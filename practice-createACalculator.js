/*Creating and Using Objects| Lesson 2
Practice: Create a Calculator
Instructions
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
1
● Round 23.67891 to 2 decimal places.
Setup
For this activity, you will create your own repository to store your code:
1. Create a new repository.
2. Name it: practice-createACalculator-[Your First Name]-[Your Last Initial]
3. Make sure the repository is public.
4. Clone the repository to your local machine.
5. Start working on the code.
6. When you are finished, commit your changes and push them to your
repository.
Submission
Submit the url for your GitHub repo in the field below.
*/

const readline = require('readline-sync');
//Calculations done by Calculator
//Absolute value calculation
function calAbsoluteValue(x){
    return Math.abs(x);
}

//power calculation
function calBaseRaisedToPower(base,power){
    return Math.pow(base,power);
}

//finding square root

function findSquareRoot(x){
    return Math.sqrt(x);
}

//Minimum and Maximum finding
function findMinAndMax(numbers){
    return {
        min:Math.min(...numbers),
        max:Math.max(...numbers)
    }
} 

//generation of random numbers
function geneRandomNumberInRange(min,max){
    return Math.floor(Math.random()* max -min +1)+1;
}

//custom rounding
function customRound(num,decimal){
    let x=Math.pow(10,decimal);
    return Math.round(num* x)/x;
}

//Test cases
console.log("absolute value of -45.67 is : "+calAbsoluteValue(-45.67));
console.log("5 raised to the power of 3 is: "+calBaseRaisedToPower(5,3));
console.log("square root of 144 is : "+findSquareRoot(144));
const numbers=[3,78,-12,0.5,27];
const {min,max}=findMinAndMax(numbers);
console.log("minimum and maximum number from array [3,78,-12,0.5,27} is : "+"min:"+min+","+"max:"+max);
console.log("random number between 1 and 50 is : "+geneRandomNumberInRange(1,50));
console.log("23.67891 is rounded to 2 decimal places is : "+customRound(23.67891,2));

function calculator(){
    
    for(let i=0;i<6;i++){
    const operation=readline.questionInt(`select an operation\n1.absolute value\n2.power\n3.squareroot\n4.max & min\n5.random numbers\n6.rounding :  `);

    if (operation===1){
    const absInput=readline.questionInt("enter a number : ");
    console.log(`absolutevalue of ${absInput} is `+ calAbsoluteValue(absInput));
    //continue;
    } 
    else if(operation===2){
    const base=readline.questionInt("enter base number: ");
    const power=readline.questionInt("enter power number: ");
    console.log(`${base} raised to the power ${power} is :`+calBaseRaisedToPower(base,power));
    //continue;
    }  
    else if(operation===3){
        const sqrtInput=readline.question("enter a numbr : ");
        console.log(`Square root of ${sqrtInput} is:`+findSquareRoot(sqrtInput));
        //continue;
    } 
    else if(operation===4){
        const numbers=readline.question("enter numbers seperated by comma: ");
        const arrayNums=numbers.split(",").map(Number);
        let {min,max}=findMinAndMax(arrayNums);
        console.log("minimum number:"+min+","+"maximum number:",max);

    }
    else if(operation===5){
        const min=readline.question("enter minimum range number: ");
        const max=readline.question("enter maximum range number: ");
        console.log(`random num between ${min} and ${max} : `+geneRandomNumberInRange(min,max));
    }
    else if(operation===6){
        const customRoundInput=readline.question("enter number : ");
        const decimal=readline.question("enter decimal : ");
        console.log(`${customRoundInput}  rounded to ${decimal} decimal places is : `+customRound(customRoundInput,decimal));

    }
}
}

calculator();