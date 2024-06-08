// function findFloor(array,num,left = 0, right= array.length -1) {

//     if (right >= left){
//         let mid = Math.floor((left + right)/2);

//         console.log(mid,"this is mid ")
//         console.log(left,"This is left")
//         console.log(right,"This is right")
//         if(array[mid] < num && array[mid + 1] > num || array[mid + 1] == undefined ){
//             return mid;
//         }else if(array[mid] > num && array[mid-1]<num){
//             return array[mid-1];
//         }else if( array[mid] > num){
//             return findFloor(array, num,left,mid-1);
//         }
//         return findFloor(array,num,num+1,right);
//     }

//     return -1
// }


//     console.log(findFloor([1,2,8,10,10,12,19], 20),"This is the Answer")

function findFloor(array, num, left = 0, right = array.length - 1) {
    if (right >= left) {
        if (array[right]<num){
            return array[right]
        } 

        let mid = Math.floor((left + right) / 2);

        console.log(mid, "this is mid ");
        console.log(left, "This is left");
        console.log(right, "This is right");

        if (array[mid] <= num && (mid === array.length - 1 || array[mid + 1] > num || array[mid + 1] === undefined)) {
            return array[mid];
        } else if (array[mid] > num && array[mid - 1] < num) {
            return array[mid - 1];
        } else if (array[mid] > num) {
            return findFloor(array, num, left, mid - 1);
        }
        return findFloor(array, num, mid + 1, right); // Add return statement here
    }

    return -1;
}

// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5), "This is the Answer");


module.exports = findFloor