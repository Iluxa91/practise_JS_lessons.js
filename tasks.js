// Task 1
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
//
// Number.prototype.plus = function (value) {
//     return this + value;
// }
// Number.prototype.minus = function (value) {
//     return this - value;
// }
//
// const res = (2).plus(3).minus(1)
// console.log(res)


// Task 2
// Реализуйте функцию, которая принимает следующие аргументы (строки) , и возвращает строку '1*b*1c'

// const f = (symbol,...args) => {
//     //return Array.prototype.slice.call(arguments,1).join(arguments[0])
//     return args.join(symbol)
// }
// console.log(f('*', '1', 'b', '1c') )

// console.log(
//     f('*', '1', 'b', '1c') //-> '1*b*1c'
//     f('^', '1', 'b', '1c', 2, 3) //-> '1^b^1c^2^3'
// )


// Task 3
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
//     valueNode: 3,
//     next: [
//         {
//             valueNode: 1,
//             next: null
//         },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: [
//                 {
//                     valueNode: 1,
//                     next: null
//                 },
//                 {
//                     valueNode: 5,
//                     next: null
//                 }
//             ]
//         }
//     ]
// };

// const treeSumRecursive = (tree) => {
//    let sum = tree.valueNode
//     if(tree.next){
//         tree.next.forEach(subtree=>
//             sum += treeSumRecursive(subtree))
//     }
//
//     return sum
// }
// const treeSumLoop = (tree) => {
//     let sum=0
//     const queue = [tree]
//     while (queue.length){
//         const current = queue.pop()
//         sum += current.valueNode
//
//         if(current.next){
//             current.next.forEach(subtree=>{
//                 queue.push(subtree)
//             })
//         }
//     }
//     return sum
// }
// console.log(treeSumRecursive(tree))
// console.log(treeSumLoop(tree))

// Task 4
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// Task 5
//Реализуйте функцию Foo, что бы все корректно работало

// class Book {
//     constructor(name, author) {
//         this.name = name;
//         this.author = author;
//     }
// }
// const Foo = (Bookclass, name, author) => {
//     return new Bookclass(name,author)
// }
//
// const book = Foo(Book, 'js', 'petr');
//
// console.log(book.name); //js


// Task 6
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// const f = (a,b) => {
//     if(b===undefined){
//         return (c) => {
//             return a+c
//         }
//     } else {
//         return a+b
//     }
// }

// const func = (...args) => {
//     if (args.length > 1) {
//         return args.reduce((cv, pv) => cv + pv)
//     }
//
//     return (...args2) => {
//         return args.reduce((cv, pv) => cv + pv) + args2.reduce((cv, pv) => cv + pv);
//     }
// }

// console.log(
//     f(2, 3)// -> 5
// )
//
// console.log(
//     f(2)(3) // -> 5
// )


// Task 7
// Реализовать функцию f: f(1)(2)(3)() -> 6, f()(3)(1)(5)() -> 9,

// const f = (value=0) => {
//
//     let outer = value
//
//     return (value)=>{
//         if(!value){
//             return outer
//         } else {
//             return  f(outer+value)
//         }
//     }
// }
// const f1 = (...args) => {
//     return (value) => {
//         if(!value) {
//             return args.reduce((acc,v) => acc+v, 0)
//         } else {
//             args.push(value)
//             return f1(...args)
//         }
//     }
// }

// console.log(
//     f()() //-> 0
// )

// console.log(
//     f(1)() //-> 1
// )

// console.log(
//     f()(1)() //-> 1
// )

// console.log(
//     f()(1)(2)() // -> 3
// )

// console.log(
//     f(1)(2)(3)() //-> 6
// )

// console.log(
//     f()(3)(1)(5)() //-> 9
// )

// console.log(
//     f()(3)() //-> 3
// )



// Task 8
// Реализовать функции seven, plus, minus one, two так, что бы следующие вызовы работали

// const one = (value) => {//one()-> 1
//     return value? (value+1) : 1
//     //return 1 + value||0
// }
// const two = (value) => {//two()-> 2
//     return value? (value+2) : 2
//     //return 2 + value||0
// }
// const seven = (value) => {//seven()- >7
//     return value? (value+7) : 7
// }
// const minus = (value) => {
//     return -value
// }
// const plus = (value) => {
//     return value
// }
//
// console.log(
//     seven( plus( one()))
// ) // -> 8
//
// console.log(
//     seven(
//         minus(
//             two()
//         )
//     )
// )  // -> 5



// Task 9
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// const f = (arr) => {
//     const res = {}
//     arr.forEach(n=>{
//         res[n]=1
//     })
//     return Object.keys(res).map(k=>+k)
// }
//
// console.log(
//     f([1, 2, 2, 3, 4, 4, 6])  // -> 1, 2, 3, 4, 6
// )


// Task 10
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.

// const f = (arr) => {
//     const res = []
//     arr.forEach(n=>{
//         if (n!==0){
//             res.push(n*2)
//         }
//     })
//     return res
// }
//
// console.log(
//     f([1, 2, null, 7, 8, null, 3]) // => [2, 4, 14, 16, 6]
// )



// Task 11
// Необходимо написать функцию, возвращающую значения всех вершин дерева


// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: [
//                 { value: 4 },
//                 { value: 5 },
//             ]
//         },
//         {
//             value: 3,
//             children: [
//                 { value: 6 },
//                 { value: 7 },
//             ]
//         }
//     ]
// };

// const getTreeValues=(tree) => {
//     let res = [tree.value]
//     if(tree.children){
//         tree.children.forEach(subtree=>{
//             res=res.concat(getTreeValues(subtree))
//         })
//     }
//     return res
// }


// console.log(
//     getTreeValues(tree) // => [1, 2, 4, 5, 3, 6, 7]
// )

// console.log(
//     getTreeValuesLoop(tree) // => [1, 2, 4, 5, 3, 6, 7]
// )



// Task 12
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// const b = new Bomb(2, 'boom')

// b.explode() //'boom'



// Task 13
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.

// console.log(
//     rle("AVVVBBBXXDHJFFFFDD") AV3B3X2DHJF4D2
// )


// Task 14
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.



// Task 15
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {... }
// let list = new LinkedList(1, 2, 3)
// list.add(4)          undefined
// list.add(5)          undefined
// list.has(1)          true
// list.has(4)          true
// list.has(6)          false

// class LinkedList {
//     #head = null
//     #tail = null
//
//     constructor(...values) {
//        values.forEach(v=>{
//            this.add(v)
//        })
//     }
//     add(value){
//         const node = new ListNode(value)
//         if(!this.#head){
//             this.#head = node
//         } else if (this.#tail) {
//             this.#head.next = node
//             this.#tail = node
//         } else {
//             const oldTail = this.#tail
//             this.#tail = node
//             oldTail.next = node
//         }
//     }
//     has(value){
//         let current = this.#head
//         let isValue = current.value === value
//         while (current.next){
//             current = current.next
//             if(current.value===value){
//                 isValue = true
//                 break
//             }
//         }
//         return isValue
//     }
// }