let student = {
    name: 'nico',
    food: 'les pates',
    city: 'atlanta'
}

var caracteres = 0

Object.keys(student).forEach((stud) => {
        caracteres += stud.length
})

console.log(caracteres)

if (caracteres%2 == 0) {
    console.log("pair")
} else {
    console.log("impair")
}