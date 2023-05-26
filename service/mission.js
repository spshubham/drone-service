"use strict";
var Response = require("../utils/response");
const conf = require("../conf/conf")
const axios = require("axios")
const missionDB = require("../db/mission.db")
const validate = require("../utils/validation")

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns add mission
 */
exports.addMission = async function (body, user_id, site_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId

    if (!body.waypoints || !body.speed || !body.alt || !body.name) {
      throw Response.InvalidReqBody
    }
    let valid = validate.isValidRegisterMissionBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const DroneData = await missionDB.addMission(body, user_id, site_id)
    return DroneData;
    //return res
  } catch (error) {
    console.log(error);
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @update mission info 
 */
exports.updateMission = async function (body, user_id, site_id, mission_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser

    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId
    let valid = validate.isValidRegisterMissionBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const MissionData = await missionDB.updateMission(body, user_id, site_id, mission_id)
    if (MissionData)
      return MissionData;
    else
      return Response.RecordNotFound

  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};


/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @ delete mission  
 */
exports.deleteMission = async function (user_id, site_id, mission_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId
    const MissionData = await missionDB.deleteMission(user_id, site_id, mission_id)
    if (MissionData.deletedCount)
      return Response.MissionDeleted;
    else
      return Response.RecordNotFound


  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @returns mission details
 */
exports.fetchMission = async function (user_id, site_id, mission_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId
    const MissionData = await missionDB.fetchMission(user_id, site_id, mission_id)
    if (MissionData.length)
      return MissionData
    else
      return Response.RecordNotFound


  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};