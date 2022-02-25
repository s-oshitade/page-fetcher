/**
 * fetcher.js takes a URL as a command line argument as well as a local file path and downloads the resource to the specified path.
 */
const request = require("request");
const fs = require("fs");

const url = process.argv.slice(2).shift().toString();
const filepath = process.argv.slice(3).toString();
// const filepath = 'index.html'

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(filepath, body, (e) => {
    if (e) throw e;
    console.log("message:", `Downloaded and saved 1235 bytes to ${filepath}`);
  });
});
