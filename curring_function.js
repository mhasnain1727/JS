//It is a technique in functional programming, transformation of the function having the multiple arguments into several funtions of a single arguments in sequence.

const calArea = function(l, b, h){
    return l*b*h;
}

const a1= calArea(4,5,6);
console.log(a1);


const calArea1 = function(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}

const a2 = calArea1(3)(4)(5);
console.log(a2);


//----------------------------------------------------------

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(3,6,10));


function volume(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(volume(1)(2)(3));
