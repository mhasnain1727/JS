
// axios.get('http://localhost:3000/data')
fetch('http://localhost:3000/data')
.then((response) => {
    return response
})
.then((data) => {
    console.log(data)
}).catch(err => (console.log(err)))