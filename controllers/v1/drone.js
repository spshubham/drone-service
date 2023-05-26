"use strict";

var utils = require("../../utils/writer.js");
var Drone = require("../../service/drone.js");

module.exports.addDrone = function addDrone(req, res, next) {
  Drone.addDrone(req.body, req.user.user_id, req.query["site_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDrone = function updateDrone(req, res, next) {
  Drone.updateDrone(req.body, req.user.user_id, req.query["site_id"], req.query["drone_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDroneSite = function updateDroneSite(req, res, next) {
  Drone.updateDroneSite(req.body, req.user.user_id, req.query["site_id"], req.query["drone_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDrone = function deleteDrone(req, res, next) {
  Drone.deleteDrone(req.user.user_id, req.query["site_id"], req.query["drone_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchDrone = function fetchDrone(req, res, next) {
  Drone.fetchDrone(req.user.user_id, req.query["site_id"], req.query["drone_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};