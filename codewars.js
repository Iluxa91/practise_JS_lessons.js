// function expressionMatter(a, b, c) {
//     return Math.max((a*b+c),(a+b*c),((a+b)*c),(a*(b+c)),(a+b+c),(a*b*c));
// }
//
// function feast(beast, dish) {
//     return beast.slice(-1)==dish.slice(-1)&&beast[0]==dish[0]
// }
//
// function multiTable(number) {
//     return (`1 * ${number} = ${1 * number}\n`+`2 * ${number} = ${2 * number}\n`
//         +  `3 * ${number} = ${3 * number}\n` + `4 * ${number} = ${4 * number}\n`
//         + `5 * ${number} = ${5 * number}\n` +`6 * ${number} = ${6 * number}\n`
//         + `7 * ${number} = ${7 * number}\n` + `8 * ${number} = ${8 * number}\n` +
//         `9 * ${number} = ${9 * number}\n` + `10 * ${number} = ${10 * number}`
//     )
// }
//
// function assembleString(array){
//     let arr=[]
//     for (let i=0;i<array.length;i++){
//         for (let j=0;j<array[i].length;j++){
//             if(i==0) arr.push(array[i][j])
//             if(arr[j] === '*' || array[i][j] !== '*') arr[j] = array[i][j]
//         }
//     }
//     return arr.map(el=>el=='*' ? '#' : el).join('');
// }
//
// function sortThePile(pileOfTowels, weeklyUsedTowels) {
//     let resultTowels = pileOfTowels
//     for (let i = 0; i < weeklyUsedTowels.length; i++) {
//         resultTowels = resultTowels.slice(0, pileOfTowels.length - weeklyUsedTowels[i]).concat(resultTowels.slice(-weeklyUsedTowels[i]).sort().reverse())
//     }
//     return resultTowels
// }
// console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2]))
//
// function differences(a) {
//     if (a.length>1){
//         let res = []
//         for (let i=0;i<a.length-1;i++){
//             res.push(Math.abs(a[i]-a[i+1]))
//         }
//         return differences(res)
//     }
//     return a[0]
// }
// console.log(differences([1,5,2,7,8,9,0]))
//
// console.log(1)
// let pr = new Promise((res,rej)=>{
//     res('oleg')
//     console.log(2)
// })
// pr.then(value=>console.log(3))
// pr.then(value =>console.log(4))
// console.log(5)
//
// function loopArr(arr, direction, steps) {
//     if (direction === 'left') {
//         return arr.slice(steps, arr.length).concat(arr.slice(0, steps))
//     } else {
//         return arr.slice(-steps).concat(arr.slice(0, -steps))
//     }
// }
//
// console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2))
//
// function gracefulTipping(bill) {
//     if(bill*1.15<10){
//         return Math.ceil(bill*1.15)
//     } else if (bill*1.15<100){
//         return Math.ceil(bill*1.15/5)*5
//     } else {
//         return gracefulTipping(bill/10)+'0'
//     }
// }
//
//
// // Merge overlapping strings
// function mergeStrings(first, second){
//     let result=first+second
//     for (let i =0;i<first.length;i++){
//         if (second.startsWith(first.slice(i))){
//             return result = (first.slice(0,i)+second)
//         }
//     }
//     return result
// }

// Average Fuel Consumption

// function solve(before, after) {
//     return +((after[0] * after[1] - before[0] * before[1]) / (after[1] - before[1])).toFixed(1)
// }
//
// console.log(solve([7.9, 100], [7.0, 600]))



// Find the Speedcuber's times!

// function cubeTimes(times) {
//     let res = +(times.sort((a,b)=>a-b).slice(1,4).reduce((acc,num)=>acc+num,0)/3).toFixed(2)
// return [res,Math.min(...times)]
// }
// let times = [9.5, 7.6, 11.4, 10.5, 8.1]
// console.log(cubeTimes(times))