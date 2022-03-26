function display(val){
    console.log(val);
}

function calSum(a, b, f1){
    sum = a + b;
    f1(sum);
}

calSum(3,6, display);


// var arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr.forEach((val) => {
//     return val*2;
// }))
