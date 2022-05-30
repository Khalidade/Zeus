  document.getElementById("team-list").style.color = "whitesmoke";
  document.getElementById("zeus-caption").style.color = "whitesmoke";

//  Question 2
let teamMembers = ["simple_soul", "luchi", "etinosa", "Tolu", "khalid", "Hayj", "TJ", "Oresauce", "Mavdavis"  ]
console.log(teamMembers [4])

// Question 3

const aboutMe = {
  firstName: "Adeleke", 
  lastName : "Olalekan",
  bestMovie : "Matrix",
  bestFood : "amala and Egusi",
  complexion: "Ebony",
  birthMonth: "December",
  state: "Oyo",
  groupName: "Team Zeus",
}
   


console.log(aboutMe ["bestMovie"])

// Question 4
const myNoun1 = "Khalid";
const myVerb1 = "sleep";
const myAdjective1 = "annoying";

console.log(myNoun1 + " is " + myAdjective1);
console.log(myVerb1 + " is " + myAdjective1);
console.log(myNoun1 + " can " + myVerb1);
console.log(myNoun1 + "" + myVerb1 + " under the tree ");
console.log(myNoun1 + " seems like an " + myAdjective1 +  " soul ");

// Question 5

function division(num1, num2) {
  console.log((num1 % num2));

}

division(5, 2);



// Question 6

//(-b +- squareroot((b * b) - 4ac)) / 2a;

function quadraticEquation (a, b, c) {
  x1 = (-b + Math.sqrt((b**2) - (4 * a * c))) / 2 * a;
  x2 = (-b - Math.sqrt((b**2) - (4 * a * c))) / 2 * a;
  return {x1, x2};
}

console.log(quadraticEquation(1, 5, 6));

// Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quicly";
const wordBlanks = " ";

console.log("the" + wordBlanks + myAdjective + wordBlanks + myNoun + wordBlanks + myVerb + wordBlanks + myAdverb);

// Question 8

function areaofACircle(r) {
  const PI = 3.142;
  const areaCircle = PI * (r**2);
  return areaCircle;
}

console.log(areaofACircle(9).toFixed(2));


// Question 9

function calculateSimpleInterest(principal, rate, time) {
  simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

console.log(calculateSimpleInterest(8200, 17.5, 2.5));


// Question 10

console.log(10 % 4)

// Question 11

const meritHigherBMI = "Merit has a higher BMI";
const nutJobHigherBMI = "NutJob has a higher BMI";

function calculateBmi(mass, height) {
    const BMI = mass / (height ** 2);
    return BMI;
}

meritBMI1 =calculateBmi(78, 1.69);
nutJobBMI1 = calculateBmi(92, 1.95);

if (meritBMI1 > nutJobBMI1) {
    console.log(meritHigherBMI + " has " + Math.round(meritBMI1));
}
else {
    console.log(nutJobHigherBMI + " has " + Math.round(nutJobBMI1));
}

meritBMI2 =calculateBmi(85, 1.76);
nutJobBMI2 = calculateBmi(95, 1.88);

if (meritBMI2 > nutJobBMI2) {
    console.log(meritHigherBMI + " has " + Math.round(meritBMI2));
}
else {
    console.log(nutJobHigherBMI + " has " + Math.round(nutJobBMI2));
}