'use strict';

var mongoose = require('mongoose'),
  User = require('./api/users/user.model'),
  seed;

seed = {
  data: [{
    email: 'mhatami@thinkful.com',
    firstName: 'Mehran',
    lastName: 'Hatami',
    phoneNumber: '+989396396040',
    birthDate: new Date(1981, 2, 28)
  }, {
    email: 'jahensle85@me.com',
    firstName: 'Jared',
    lastName: 'Hensley',
    phoneNumber: '***',
    birthDate: new Date(1985, 7, 15)
  }, {
    email: 'ctsongas@thinkful.com',
    firstName: 'Chris',
    lastName: 'Tsongas',
    phoneNumber: '***',
    birthDate: new Date(1991, 2, 8)
  }, {
    email: 'mkhan@thinkful.com',
    firstName: 'Mohammad',
    lastName: 'Umair Khan',
    phoneNumber: '***',
    birthDate: new Date(1987, 9, 2)
  }, {
    email: 'melanie.brgr@gmail.com',
    firstName: 'Michelle',
    lastName: 'Gerber',
    phoneNumber: '***',
    birthDate: new Date(1983, 3, 23)
  }, {
    email: 'isha.ojha@gmail.com',
    firstName: 'Isha',
    lastName: 'Ojha',
    phoneNumber: '***',
    birthDate: new Date(1993, 11, 8)
  }, {
    email: 'mtehrani@thinkful.com',
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
