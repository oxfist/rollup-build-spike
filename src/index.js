import greeting from './greeting.js';

export async function sayHelloAfter(seconds) {
  setTimeout(() => {
    console.log(greeting)
  }, seconds * 1000);
}
