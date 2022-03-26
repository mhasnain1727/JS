const d1= {
    dept : 'Computer Science',
    dep_code : 101,
    msg(sName, sNo){
        console.log(`Welcome ${sName} in deaprtment of ${this.dept}. Your id is ${sNo} and dept code is ${this.dep_code}`);
    }
};

const d2 = {
    dept: 'Socila Science',
    dep_code : 102
}

const val = d1.msg;
// val('Rahul', 001);

val.apply(d1, ['Rahul', 001]);
val.apply(d2, ['Raj', 010]);