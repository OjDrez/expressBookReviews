const books = require("./router/booksdb");

let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(books.author);

    resolve("Show Books Details in the shop");
  }, 2000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
});

myPromise1.then((successMessage) => {
  console.log("From Callback " + successMessage);
});

myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage);
});
