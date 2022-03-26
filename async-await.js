console.log("Hello before async")

async function hello(){
    console.log("Hello before await")
    const resp = await axios.get('http://localhost:3000/data');
    console.log(resp);
    // resp.then((response) => {
    //     console.log(response);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
}
hello();
console.log("Hello after function")
