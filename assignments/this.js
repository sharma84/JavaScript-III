/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: this : global scope, default
* 2. Implicit Binding: this: function is called by a preceding dot.
* 3. Explicit Binding: this: occurs when .call(), .apply() or .bind()are used on a function.
* 4. New Binding: this: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myNumber(){
    console.log(this.number);
}
   let a = 2;
myNumber();


// Principle 2

// code example for Implicit Binding

function myNumber ()  {
    console.log(this.number);
}
let object = {
    number: 2,
    myNumber: myNumber 
}
object.myNumber();

// Principle 3

// code example for New Binding
function Greetings(greeter) {
    this.greeting = 'Hi ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const john = new Greetings('John');
  const mary = new Greetings('Mary');
  
  mary.speak();
  mary.speak();

// Principle 4

// code example for Explicit Binding
function myNumber ()  {
    console.log(this.number);
}
let object = {
    number: 2,
}
myNumber.call(object);