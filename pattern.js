let num=11;
for(let i=1; i<=Math.ceil(num/2) ; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write('*');
    }
    console.log();   
}
for(let i=1; i<=Math.floor(num/2) ; i++){
    for(let j=1; j<=Math.floor(num/2)-i+1; j++){
        process.stdout.write('*');
    }
    console.log();   
}