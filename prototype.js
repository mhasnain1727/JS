const person = function(myName, birthYear){
    this.myName = myName;
    this.birthYear = birthYear;
}


person.prototype.checkAge = function(){
    const age = 2022 - this.birthYear;
    console.log(`Hey, ${this.myName}. Your current age is ${age}`)
}

console.log(person.prototype)


const p1 = new person('Hasnain', 1999);
p1.checkAge();

const p2 = new person('Ahmad', 1997)

p2.checkAge();