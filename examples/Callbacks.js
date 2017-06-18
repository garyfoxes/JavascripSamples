/**
 * Created by garyfox on 18/06/2017.
 */
function sayHiLater() {
    let gretting = 'Hi';
    setTimeout(function () {
        console.log(gretting + '!! I am from the set timeout')
    }, 3000);
}
sayHiLater();

function createCallback(callback) {

    console.log('Hello');
    callback()
}

createCallback(function () {
    console.log('I am done');
});