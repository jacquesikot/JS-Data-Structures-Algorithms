// Stack - A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle.

function Stack() {
  //properties and methods go here
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };
}
