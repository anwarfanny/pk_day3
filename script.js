console.log("loading")
const h1 = document.querySelector("h1")
console.log(h1.tex)
console.assert(document.querySelector("h2"), 'h2 not found')

const number = [
    {first: 'neil', last: 'amstrong'},
    {first: 'meli', last: 'frida'},
    {first: 'anna', last: 'laily'},

]
console.table(number)

let numbar = 1
let string = "pesantren coding $(number)"
console.log(string)

let string = "pesantren coding $(number)"

let info = ['first', 'second', 'third']
console.log(info[0])
console.log(info.length)

let plus = 2 + 2;
let minus = 3 + 2;
let modulus = 7 + 2;
let multiple = 4 + 2;
console.log(plus)
console.log(minus)
console.log(modulus)
console.log(multiple)

let interger = 8
let comparison = interger == "8"
let comparison1 =interger !== 8
console.log(comparison)
console.log(comparison1)

let comparison2 = interger === 12 && interger === 8 
console.log(comparison2)

if (interger === 12 && interger === 8) {
    console.log("ini benar")
}

let risult = Math.round(4.7)
console.log(risult)

for (let i = 0; i <= 9; i++) {
    console. log(i)
    document.getElementById("id").innerHTML +=
    <ul>
        <li>$(i)</li>
    </ul>
}

let currentDate = new Date()
console.log(currentDate)

let year = currentDate.getFullYear
console.log('this year is ${year}')

let month = currentDate.getMonth
console.log('this year is ${month}')

let date = currentDate.getDate
console.log('this year is ${date}')
