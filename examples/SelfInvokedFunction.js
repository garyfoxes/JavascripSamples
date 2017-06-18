/**
 * Created by garyfox on 17/06/2017.
 */
'use strict';
//Assigns value straight away to variable let
let result = function (num1,num2) {
    return num1 * num2;
}(2,5);
console.log(result);

//invoke anonymous function
//particular useful to avoid collisions with vriables from other files(safe code)
(function (num1,num2) {
    console.log(num1 * num2);
})(3,4);
