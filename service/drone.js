"use strict";
var Response = require("../utils/response");
const droneDB = require("../db/drone.db")
const validate = require("../utils/validation")
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns add drones
 */
exports.addDrone = async function (body, user_id, site_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!body.drone_type || !body.make_name || !body.name) {
      throw Response.InvalidReqBody
    }
    let valid = validate.isValidRegisterDroneBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const DroneData = await droneDB.addDrone(body, user_id, site_id)
    return DroneData;
    //return res
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} drone_id 
 * @updates the drone info 
 */
exports.updateDrone = async function (body, user_id, site_id, drone_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(drone_id))
      return Response.InvalidDroneId
    let valid = validate.isValidRegisterDroneBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const DroneData = await droneDB.updateDrone(body, user_id, site_id, drone_id)
    if (DroneData)
      return DroneData;
    else
      return Response.RecordNotFound

  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} drone_id 
 * @update drone sites 
 */
exports.updateDroneSite = async function (body, user_id, site_id, drone_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId
    const DroneData = await droneDB.updateDroneSite(body, user_id, site_id, drone_id)
    if (DroneData)
      return DroneData;
    else
      return Response.RecordNotFound
    //return res
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} drone_id 
 * @deletes the drone 
 */
exports.deleteDrone = async function (user_id, site_id, drone_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    if (!validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId
    const DroneData = await droneDB.deleteDrone(user_id, site_id, drone_id)
    if (DroneData.deletedCount)
      return Response.DroneDeleted;
    else
      return Response.RecordNotFound
    //return res
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} drone_id 
 * @returns drone info
 */
exports.fetchDrone = async function (user_id, site_id, drone_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser

    const DroneData = await droneDB.fetchDrone(user_id, site_id, drone_id)
    if (DroneData.length)
      return DroneData
    else
      return Response.RecordNotFound

    //return res
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};