/**
 * Created by garyfox on 02/07/2017.
 */

//Generally when creating a constructor properties are set in the constructor,espcially if these properties change e.g first name,last name
// Methods would be created using prototype variable (this saves memory space
// as each instance of an object you create points to the same prototype methods)
// If you had 1000 instances of Person and set everything within the constructor then each instance would have its own copy of methods

let Person = function (firstName,lastName) {

    this.firstName=firstName;
    this.lastName=lastName;
};

Person.prototype.sayHelloMessage = function () {
    console.log('Hello ' + this.firstName)
};
Person.prototype.updateSayHelloMessage = function (message) {
    Person.prototype.sayHelloMessage = function () {
        console.log(message + ' ' + this.firstName)
    }
};

Person.prototype.getFullName = function () {
 return this.firstName + ' ' + this.lastName;
};

Person.prototype.setFullName = function (firstName,lastName) {
    this.firstName = firstName;
    this.lastName=lastName;
};
let obj = new Person('Joe','Bloggs');
let obj2 = new Person('Jane','Doe');
obj.setFullName('Billy','Joe');
console.log(obj2.getFullName());


//Be careful here
//If you update a property or function using the prototype then its changes for all instances
//Hence why properties should be updated using 'this' keyword

obj.sayHelloMessage();
obj.updateSayHelloMessage('Changed Mofo');
obj.sayHelloMessage();
obj2.sayHelloMessage();



