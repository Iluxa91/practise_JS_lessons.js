const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];


let number = [1, 44, 3, 56, 234]

for (let j=0; j<number.length-1; j++) {
    for (let i=0; i < number.length - 1 - j; i++) {
        if (number[i] > number[i+1]) {
            [number[i],number[i+1]] = [number[i+1], number[i]]
        }
    }
}
console.log(number)
console.log(number.reverse())


// for (let j = 0; j < numbers.length - 1; j++) {
//     let isSorted = true
//     for (let i = 0; i < numbers.length - 1 - j; i++) {
//         if(numbers[i] > numbers[i + 1]){
//             isSorted = false;
//             [numbers[i],  numbers[i + 1]] = [numbers[i + 1], numbers[i]]
//         }
//     }
//     if(isSorted) break
// }
