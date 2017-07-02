/**
 * Created by garyfox on 02/07/2017.
 */
let _ = require('underscore');
let person = {
    firstName: 'Gary',
    lastName: 'Fox',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
};

let john = {
    firstName: 'John',
    lastName: 'Bloggs'
};
//Bad practice,only for demo purposes(performance impact)
john.__proto__ = person;

for (let prop in john) {
    //hasOwnProperty does not look in the prototype
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '12 Church Street',
    getFormalFullName: function () {
        return this.lastName + ',' + this.firstName;
    }
};

var jim = {
    getFirstName: function () {
        return this.firstName;
    }
};
//adds the properties from jane and jim into john i.e so john has every property from them 3 objects
_.extend(john,jane,jim);

console.log(john);