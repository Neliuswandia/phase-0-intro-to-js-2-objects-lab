const student = {
    name:"Nellius",
    age:18,
    height:1.5,
    phone:"0752231598"
}

const student1 = {...student}
student1.phone = "0701910146"

console.log(student)
console.log(student1)