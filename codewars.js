function expressionMatter(a, b, c) {
    return Math.max((a*b+c),(a+b*c),((a+b)*c),(a*(b+c)),(a+b+c),(a*b*c));
}

console.log(expressionMatter(9,7,2))

function feast(beast, dish) {
    return beast.slice(-1)==dish.slice(-1)&&beast[0]==dish[0]
}

function multiTable(number) {
    return (`1 * ${number} = ${1 * number}\n`+`2 * ${number} = ${2 * number}\n`
        +  `3 * ${number} = ${3 * number}\n` + `4 * ${number} = ${4 * number}\n`
        + `5 * ${number} = ${5 * number}\n` +`6 * ${number} = ${6 * number}\n`
        + `7 * ${number} = ${7 * number}\n` + `8 * ${number} = ${8 * number}\n` +
        `9 * ${number} = ${9 * number}\n` + `10 * ${number} = ${10 * number}`
    )
}

console.log(multiTable(5))


function assembleString(array){
    let arr=[]
    for (let i=0;i<array.length;i++){
        for (let j=0;j<array[i].length;j++){
            if(i==0) arr.push(array[i][j])
            if(arr[j] === '*' || array[i][j] !== '*') arr[j] = array[i][j]
        }
    }

    return arr.map(el=>el=='*' ? '#' : el).join('');
}

console.log(assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]))



function sortThePile(pileOfTowels, weeklyUsedTowels) {
    let resultTowels = pileOfTowels
    for (let i = 0; i < weeklyUsedTowels.length; i++) {
        resultTowels = resultTowels.slice(0, pileOfTowels.length - weeklyUsedTowels[i]).concat(resultTowels.slice(-weeklyUsedTowels[i]).sort().reverse())
    }
    return resultTowels
}
console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2]))

function differences(a) {
    if (a.length>1){
        let res = []
        for (let i=0;i<a.length-1;i++){
            res.push(Math.abs(a[i]-a[i+1]))
        }
        return differences(res)
    }
    return a[0]
}

console.log(differences([1,5,2,7,8,9,0]))