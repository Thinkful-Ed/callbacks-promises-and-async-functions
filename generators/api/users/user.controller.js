/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

var notFound = require('../../components/errors').notFound,
  will = require('../../will'),
  mongoose = require('mongoose'),
  User = require('./user.model');

exports.index = will(function*(req, res, next) {
  try {
    var users = yield User.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

exports.show = function*(req, res, next) {
  try {
    var user = yield User.findById(req.params.id);
    if (!user) {
      return notFound(req, res);
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}.will();

// exports.create = function(req, res, next) {
//   promisify.delay(10, {})
//     .then(function(createdUser) {
//       res.status(200).json(createdUser);
//     });
// };
//
// exports.update = function(req, res, next) {
//   promisify.delay(10, {})
//     .then(function(updatedUser) {
//       res.status(200).json(updatedUser);
//     });
// };
//
// exports.destroy = function(req, res, next) {
//   promisify.delay(10, {})
//     .then(function(data) {
//       res.status(200).json(data);
//     });
// };
