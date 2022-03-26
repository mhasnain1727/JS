
const s1 = {
    loc : 'Noida',
    nearMetro : 'Bird Santuary',
    fun : function(myName, desg){
        console.log(`Welcome ${myName}. Your id: ${desg}, work location: ${this.loc}, nearest metro station: ${this.nearMetro}.`);
    }
}

const s2 = {
    loc : 'Gurugram',
    nearMetro : 'Huda City Center'
}

const greet = s1.fun;

const boundS1 = greet.bind(s1);
boundS1('Hasnain', 5964);

const boundS2 = greet.bind(s2);
boundS2('Hasnain', 5963);