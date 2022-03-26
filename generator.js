// function* gen(){
//     console.log('2');
//     yield 20;
//     console.log('4');
//     yield 30;
//     console.log('6');
//     yield 40;
// }

// const generatorObject = gen();

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());



function* unique(){
    let num=0;

    while(num<3){
        num++;
        yield num;
    }
}

const gen = unique();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
