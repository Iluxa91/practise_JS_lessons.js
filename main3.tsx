function findDeletedNumber(arr, mixArr) {
    if (arr.length == mixArr.length) {
        return 0
    } else {
        let newMixArr = mixArr.sort((a, b) => a - b)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != newMixArr[i]) {
                return arr[i]
            }
        }
    }
}