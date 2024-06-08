function countZeroes(array) {
    let first = firstZero(array);
    if (first === -1) return 0;
    return array.length - first;
}

function firstZero(array, low = 0, high = array.length - 1) {   
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (array[mid] === 0 && (mid === 0 || array[mid - 1] === 1)) {
            return mid;
        } else if (array[mid] === 1) {
            return firstZero(array, mid + 1, high);
        }
        return firstZero(array, low, mid - 1);
    }
    return -1;
}

module.exports = countZeroes;