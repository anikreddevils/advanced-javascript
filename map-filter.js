const numbers=[3, 4 , 5, 6]
output=[];

const result=numbers.map(x=>x*x);
console.log(result);



const biggerNumber=numbers.filter(x=>x<5);
console.log(biggerNumber);


const isThere=numbers.find(x=>x<4);
console.log(isThere);