/**
 * Created by garyfox on 17/06/2017.
 */
function greet (greeting) {
 return function (name) {
     console.log(greeting + ' ' + name )
 }
}
greet('Goodbye')('Joe');



function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function() {
                console.log(i);
            }
        )

    }

    return arr;
}

var fs = buildFunctions();

//These will all print 3 as at the time they were invoked i was equal to 3 (incremented each time in the foor loop)
fs[0]();
fs[1]();
fs[2]();

//*********USING LET ****************


function buildFunctions2() {

    var arr = [];

    for (let i = 0; i < 3; i++) {

        arr.push(
            function() {
                console.log(i);
            }
        )

    }

    return arr;
}

var fs2 = buildFunctions2();

//This will print out 0,1,2 as the let variable is assigned a new place in a memory each time
// there would be 3 let variables each pinting at 0,1 and 2

fs2[0]();
fs2[1]();
fs2[2]();