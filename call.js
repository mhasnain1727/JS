//is used to borrow functionality from another one object to another

const { clear } = require("console");

const indigo = {
    flightName :'IndiGo',
    flightNumber :'Ind',
    val(fNo, pname){
        console.log(`Welcome ${pname} in ${this.flightName}. Your flight number is ${this.flightNumber}${fNo}.`);
    }
}

const airIndia = {
    flightName : 'AirIndia',
    flightNumber :'A'
}

const msg = indigo.val;
// msg(21, "Hasnain");

msg.call(indigo, 23, 'Hasnain');
// msg.call(airIndia, 22, 'Ali');
