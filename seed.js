'use strict';

var mongoose = require('mongoose'),
  User = require('./api/users/user.model'),
  seed;

seed = {
  data: [{
    email: 'user1@example.com',
    firstName: 'Mehran',
    lastName: 'Hatami',
    phoneNumber: '+989396396040',
    birthDate: new Date(1981, 2, 28)
  }, {
    email: 'user2@example.com',
    firstName: 'Jared',
    lastName: 'Hensley',
    phoneNumber: '***',
    birthDate: new Date(1985, 7, 15)
  }, {
    email: 'user3@example.com',
    firstName: 'Chris',
    lastName: 'Tsongas',
    phoneNumber: '***',
    birthDate: new Date(1991, 2, 8)
  }, {
    email: 'user4@example.com',
    firstName: 'Mohammad',
    lastName: 'Umair Khan',
    phoneNumber: '***',
    birthDate: new Date(1987, 9, 2)
  }, {
    email: 'user5@example.com',
    firstName: 'Michelle',
    lastName: 'Gerber',
    phoneNumber: '***',
    birthDate: new Date(1983, 3, 23)
  }, {
    email: 'user6@example.com',
    firstName: 'Isha',
    lastName: 'Ojha',
    phoneNumber: '***',
    birthDate: new Date(1993, 11, 8)
  }, {
    email: 'user7@example.com',
    firstName: 'Mahdi',
    lastName: 'Tehrani',
    phoneNumber: '***',
    birthDate: new Date(1990, 9, 16)
  }],

  run: function() {
    User.find({}).remove().exec(function(err){
      if(err){
        return console.error('Error on inserting seed data:', err);
      }
      User.create(seed.data, function(err){
        if(err){
          return console.error('Error on inserting seed data:', err);
        }
        console.log('Seed data has been successfully inserted!');
      });
    });
  }
};

module.exports = seed;
