const c = 1
{
    const c = 2
}
console.log(c)
let grade = 87

if (grade >= 98) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("c")
} else if (grade >= 60) {
    console.log("D")
} else {
    console.log("F")
}

let animal = "Giraffe"
switch (animal) {
    case "cow":
        console.log("this is cow")
        break
    case "Griffe":
        console.log("this is griffe")
        break
    case "Dog":
        console.log("htis is dog")
        break
    case "pig":
        console.log("this is pig")
        break
    default:
        console.log("this is animal")
        break;
}

let text = ""
for (let i = 0; i < 5; i++) {
    text += 1 +","
    console.log(text)
}
let person = {firstName: "nani", lastName: "nono", age: 100}
let text1 = ""
for (let X in person) {
    text1 += person [X] +" "
    console.log(text1)
}
//whill
let 1 = 0
let text2 =""
while (i < 5) {
    text2 += 1 + ","
    1 ++
    console.log(text2)
}
//do whill
let tex3 = ""
let 11 = 0
do {
    text3 += a + ","
    a++
    console.log(text3)
    while (i <5)
}