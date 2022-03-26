function f1(){
    var num = 10;

    function f2(){
        num+= 1;
        console.log(`Now the val of num is ${num}`);
    }

    return f2;
}

var ref = f1();
// console.log(ref);
ref();
ref();
ref();

console.dir(ref)


// we can create closure even when we doesn't return anything
let fun;
const a = function(){
    const val=20;
    fun = function(){
        console.log(val*2);
    }
}
a();
fun();

