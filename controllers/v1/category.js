"use strict";

var utils = require("../../utils/writer.js");
var Category = require("../../service/category.js");

module.exports.addCategory = function addCategory(req, res, next) {
  Category.addCategory(
    req.body,
    req.user.user_id,
    req.query["drone_id"],
    req.query["mission_id"]
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategory = function updateCategory(req, res, next) {
  Category.updateCategory(
    req.body,
    req.user.user_id,
    req.query["category_id"],
    req.query["drone_id"],
    req.query["mission_id"]
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory(req, res, next) {
  Category.deleteCategory(
    req.user.user_id,
    req.query["category_id"],
    req.query["drone_id"],
    req.query["mission_id"]
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.missionCategory = function missionCategory(req, res, next) {
  Category.missionCategory(req.user.user_id, req.query["category"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.droneCategory = function droneCategory(req, res, next) {
  Category.droneCategory(req.user.user_id, req.query["category"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
