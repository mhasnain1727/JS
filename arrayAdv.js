/* filter */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 9];

const val = arr.filter((ele) => {
  // return ele%2==0 ? true : false; //OR
  return ele % 2 == 0;
});
// console.log(val);

/* reduce */
var sum = arr.reduce((prev, curr) => {
  return prev - curr;
}, 0);
// console.log(sum);


// const val2 = arr.reduce(function(prev, ele, index, arr) {
//     console.log(prev, ele, index, arr);
// }, 0);



// delDuplicate
// 1. using filter function
var newArr = arr.filter((val,index) => {
  return arr.indexOf(val) === index;
})
// console.log(newArr);

/* set */
// 2. using set function
var delDuplicate = new Set(arr);
// console.log(delDuplicate);

// 3. using for loop just find duplicate values
for(let i=1; i<arr.length; i++) {
  for(let j=0; j<i; j++) {
    if(arr[i]==arr[j]) {
      console.log(arr[i], 'duplicate')
    }
  }
}

