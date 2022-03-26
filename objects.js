var myName={
    "Mohammad": 10,
    "Hasnain" : 20
}

const key = Object.keys(myName);
// console.log(key);

const value = Object.values(myName);
// console.log(value);

const entities  = Object.entries(myName);
console.log(entities);

const newArr = new Array();
for(i of entities) {
    // console.log(i[0], ' ', i[1]);
    // console.log(i)
    newArr.push({
        name: i[0],
        score: i[1]
    })
}
console.log(newArr)

// const newArr = new Map();
// entities.map((val, index) => {
//     // console.log(index, val);
//     newArr.set(val[0], 'Name');
//     newArr.set(val[1], 'score')
// })

// console.log(newArr);
