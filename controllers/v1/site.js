"use strict";

var utils = require("../../utils/writer.js");
var Sites = require("../../service/site.js");

module.exports.createSite = function createSite(req, res, next) {
  Sites.createSite(req.body, req.user.user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSite = function updateSite(req, res, next) {
  Sites.updateSite(req.body, req.user.user_id, req.query["site_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSite = function deleteSite(req, res, next) {
  Sites.deleteSite(req.user.user_id, req.query["site_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getSite = function getSite(req, res, next) {
  Sites.getSite(req.user.user_id, req.query["site_id"])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
