"use strict";

var utils = require("../../utils/writer.js");
var Mission = require("../../service/mission.js");

module.exports.addMission = function addMission(req, res, next) {
  Mission.addMission(req.body, req.user.user_id, req.query["site_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMission = function updateMission(req, res, next) {
  Mission.updateMission(req.body, req.user.user_id, req.query["site_id"], req.query["mission_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMission = function deleteMission(req, res, next) {
  Mission.deleteMission(req.user.user_id, req.query["site_id"], req.query["mission_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchMission = function fetchMission(req, res, next) {
  Mission.fetchMission(req.user.user_id, req.query["site_id"], req.query["mission_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};