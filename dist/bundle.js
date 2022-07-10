(function (exports) {
  'use strict';

  var greeting = "Hello";

  async function sayHelloAfter(seconds) {
    setTimeout(() => {
      console.log(greeting);
    }, seconds * 1000);
  }

  exports.sayHelloAfter = sayHelloAfter;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
