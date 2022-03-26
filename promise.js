var pro = new Promise((resolve, reject) => {
    let a =10;
    let b=10;
    if(a==b){
        resolve('TRUE');
    }
    else{
        reject('FALSE')
    }
})

pro.then((doc) => {
    console.log(doc, 'sucessfull');
}).catch((err) => {
    console.log(err, 'Failed');
})