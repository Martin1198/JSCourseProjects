const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const johnBMI = massJohn / (heightJohn ** 2);
const markBMI = massMark / (heightMark ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(johnBMI, markBMI, markHigherBMI);