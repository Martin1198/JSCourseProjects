const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIMark, BMIJohn);

if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}