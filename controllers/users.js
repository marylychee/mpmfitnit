'use strict';

const express = require('express');
const router

module.exports.addNewUser = function addNewUser (req, res, next) {



};

exports.addNewUser = function(req.swagger.params, res, next) {
  /**
   * Creates a new user in the database
   *
   * newUser NewUser new user to add to the database
   * returns user
   **/
  var examples = {};
  examples['application/json'] = {
  "password" : "aeiou",
  "last_name" : "aeiou",
  "weight" : 123,
  "id" : 123,
  "first_name" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}
