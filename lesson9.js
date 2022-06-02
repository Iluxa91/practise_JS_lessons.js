



new Promise((resolve, reject) => {
    reject("Hello")
})
    .then((res) => {

    })
    .catch(e => {
        console.log(e)
    })
    .finally(() => {

    })

Promise.all()
Promise.race()
Promise.resolve()
Promise.reject()


const test = async () => {
    await new Promise(res => res())
    console.log("Hi")
}

const res = test()


// const p = new Promise(res => {
//     res()
// })

//const p1 = Promise.resolve()


// const p2 = new Promise((res, rej) => {
//     rej()
// })

// const p3 = Promise.reject()


// Promise.all([
//     new Promise(res => { setTimeout(() => { res(1) }, 3000) }),
//     new Promise(res => { setTimeout(() => { res(2) }, 2000) }),
//     new Promise(res => { setTimeout(() => { res(3) }, 1000) })
// ])
//     .then(res => {
//         console.log(res)
//     })



// const getRequest = (url, cb) => {
//     setTimeout(() => {
//         if (url === "/hello") {
//             cb(null, "Hello")
//         } else {
//             cb("Invalid url")
//         }

//     }, 2000)
// }

// const getRequestWithPromise = (url) => {
//     return new Promise((res, rej) => {
//         getRequest(url, (err, data) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
// }


// const test = () => {
//     getRequestWithPromise("/users")
//         .then(users => {
//             return getRequestWithPromise("/users/1")
//         })
//         .then(user => {
//             return getRequestWithPromise("/users/1/books")
//         })
//         .then(books => {
//             return getRequestWithPromise("/users/1/books/1")
//         })
//         .then(book => {
//             return getRequestWithPromise("/users/1/books/1")
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// const test2 = async () => {
//     try {
//         const users = await getRequestWithPromise("/users")
//         const user = await getRequestWithPromise("/users/1/books")
//         const books = await getRequestWithPromise("/users/1/books/1")
//         const book = await getRequestWithPromise("/users/1/books/1")
//     } catch (e) {
//         console.log(e)
//     } finally {

//     }
// }



// getRequest("/users", (err, users) => {
//     if (err) {
//         console.log(err)
//     } else {
//         getRequest("/users/1", (err, user) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 getRequest("/users/1/books", (err, user) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         getRequest("/users/1/books/1", (err, user) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                                 getRequest("/users/1/books/1/page", (err, user) => {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {

//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })
