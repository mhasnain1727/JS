const sum = (function (a, b) {
  const val = a + b;
  return val;
})(10, 20);

// console.log(sum);

//closure with self invoking function
const val = (function () {
  num = 10;
  return function () {
    num += 12;
    return console.log(`Value of number is ${num}`);
  };
})();

val();
val();
val();