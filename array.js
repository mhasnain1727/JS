var arr = new Array();

arr = [1, 23, 'k', 4, 5, 6, 7, 8, 'a'];

// console.log(arr.toString());

/* The JavaScript join() method combines all array elements into a string.
It is similar to toString() method, but here you can specify the separator instead of the default comma. */
// console.log(arr.join('-'))

arr1 = [3, 99, 'z']

// console.log(arr.concat(arr1))

arr.push(12, 'g');
// console.log(arr)

arr.pop();
// console.log(arr);

arr.shift();
// console.log(arr);

arr.unshift('Hello', 101, 9099);
// console.log(arr);

// console.log(arr.slice(1, 7));

arr.splice(5, 4, 'Hello', 'hasnain', 121)
// console.log(arr)

var myName = "Hasnain"
// console.log(myName.split(''));


// console.log(arr);
// console.log(arr.indexOf('a'))

console.log(arr, arr1)
console.log(arr.concat(arr1));

