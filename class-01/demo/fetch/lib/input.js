'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');

const rules = {
  method: { required: true },
  url: { required: true },
  body: {},
  headers: {}
};

function Input() {
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args.m);
  this.url = this.getURL(args.u);
  this.body = this.getBody(args.b);
  this.header = this.getHeaders(args.h);
}

// Ask: Why are we sending the args values into each method instead
// of having those methods read the args variable above?
Input.prototype.getMethod = function (method = "") {
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
}

Input.prototype.getURL = function (url = "") {
  // Prefix it with http://localhost if they just give a port (:)
  url = url.startsWith(':') ? `http://localhost${url}` : url;
  return isUrl(url) ? url : undefined;
}

Input.prototype.getBody = function (body = undefined) {
  // using try catch as JSON.parse will throw an error
  // We'll gobble that up and sent out raw text instead
  try {
    return JSON.parse(body);
  }
  catch (e) {
    return body;
  }
}

Input.prototype.getHeaders = function () {
  return undefined;
}

Input.prototype.valid = function () {
  // Valid if we have the most important things.
  // How can we also determine their type?

  // .each() returns a boolean based on every entry returning true within the callback
  return Object.keys(rules).every((option) => {
    // returns true if the option is required and it exists --OR-- true (default) if it's not required
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;