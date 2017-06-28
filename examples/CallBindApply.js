/**
 * Created by garyfox on 28/06/2017.
 */
let person = {
    firstName:'Gary',
    lastName:'Fox',
    getFullName : function () {
       return this.firstName + ' ' + this.lastName;
    }
};

let logName = function (lang1,lang2) {
  console.log(this.getFullName());
    console.log('Languages are ' +lang1 + ' ' + lang2);
    console.log('------------------------------');
};

// bind assigns a reference of 'this' to a function. In this case the 'this' reference is the person object
//So know logName can use this.getFullName()
let logPersonName = logName.bind(person);
logPersonName('es','en');

//borrowing with bind
let person2 = {
    firstName:'Joe',
    lastName:'Bloggs'
};
//this allows person2 details to be passed to the getFullName which is in person1
//Because getFullName is a function you can use 'bind','apply','call'
console.log(person.getFullName.bind(person2)());
console.log('------------------------------');


//Call is the same as executing a function normally,only difference is you can pass in a reference to this
logName.call(person,'es','en');

//Apply is the same as call only that the arguments takes an array
logName.apply(person,['es','en']);
