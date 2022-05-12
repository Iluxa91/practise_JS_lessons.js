//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
let repeatString = (word, repeat, devider) => {
    let newArr = []
    for (let i = 0; i < repeat; i++) {
        newArr.push(word)
    }
    return newArr.join(devider)
}
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
let checkStart = (str, stPart) => {
    let arr1 = str.toLowerCase().split('')
    let arr2 = stPart.toLowerCase().split('')
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false
        } else {
            return true
        }
    }
}
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
let truncateString = (str, numb) => {
    return (str.substr(0, numb) + '...')
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
let getMinLengthWord = (str) => {
    let arr = str.split(' ');
    let result = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (result.length > arr[i].length) {
            result = arr[i];
        } else return null
    }
    return result;
}
console.log(getMinLengthWord(""))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Стдентам Инкуатора Желаю Удачи!"
let setUpperCase = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase()
    })
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
//6. Реализуйте функцию, котрая принимает параметрами две строк. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает false. Проверка проводится без учёта регистра
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
const isIncludes = (str, letter) => {
    let arr1 = str.toLowerCase().split('')
    let arr2 = letter.toLowerCase().split('')
    for (let i=0; i<letter.length;i++) {
        if (arr1.includes(arr2[i]))
            continue
        else return false
    }
    return true
};

console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "abc"))
// https://ru.code-basics.com/languages/javascript

