const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr1 = arr.map((val) => {
    return val*2;
})

const newArr2 = arr.filter((val) => {
    return val%2==0;
})

const newArr3 = arr.reduce((preVal, currVal) => preVal + currVal, 0);

console.log(arr);
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);