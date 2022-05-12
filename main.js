let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];
const copy = students.reduce((acc, el) => {   //create copy array
    return [...acc, el]
}, [])

const bestStudent = students.reduce((acc, el) => {      /// filter array
    if (el.scores > 100) {
        acc.push(el)
    }
    return acc
}, [])

// const sts = {
//     1: {name: "Nick",
//     age: 20,
//     isMarried: false,
//     scores: 120}
// }

const sts = students.reduce((acc, el) => {     ///copy array + create keys
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})
console.log(sts)