// Greeter.js
var config = require('./config.json');

module.exports = function() {
  var greet = document.createElement('div');
  var c = (x)=>{return x}
  greet.textContent = c("Hi there and greetings!");
  return greet;
};