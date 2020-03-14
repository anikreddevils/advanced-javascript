const nums=[1, 2, 3, 4, 5, 6, 7, 8];
// const part=nums.slice(2,5);
// console.log(part);// [3,4,5] & nums=same


// const remove=nums.splice(2,5);
// console.log(remove); //remove=[3,4,5,6,7]
// //console.log(nums); //nums=[1,2,8] Effect main array


// const injectAfterRemove=nums.splice(2,5,10);
// console.log(injectAfterRemove); //injectAfterRemove=[3,4,5,6,7]
// console.log(nums); //nums=[1,2,10,8]

const together=nums.join(",")
console.log(together); //together=[1,2,3,4,5,6,7,8]
console.log(nums);