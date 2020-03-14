function add(num1, num2){
    console.log([...arguments]);
    return num1+num2+arguments[2];
}
const results=add(2, 3, 5, 6);
console.log(results);