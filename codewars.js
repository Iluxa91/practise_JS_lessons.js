function expressionMatter(a, b, c) {
    return Math.max((a*b+c),(a+b*c),((a+b)*c),(a*(b+c)),(a+b+c),(a*b*c));
}

console.log(expressionMatter(9,7,2))

function feast(beast, dish) {return
beast.slice(-1)==dish.slice(-1)&&beast[0]==dish[0]?true:false
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