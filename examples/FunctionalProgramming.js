/**
 * Created by garyfox on 28/06/2017.
 */
function mapArr(arr,fn){
    let newArr = [];
    for(let i =0;i< arr.length;i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

let arr1 = [1,2,3];
let checkIsGreaterThan= function (limiter) {
    return function(limiter,value){
        return limiter < value;
    }.bind(this,limiter)
};
let arr2 = mapArr(arr1,function (val) {
   return val * 2;
});
console.log('------------------');
console.log(arr2);
console.log('------------------');

let arr3 = mapArr(arr1,checkIsGreaterThan(3));
console.log(arr3);
console.log('------------------');