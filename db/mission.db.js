const Mission = require("../models/mission.models");
const Response = require("../utils/response");

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @ creates a mission 
 */
exports.addMission = async (body, user_id, site_id) => {
    try {
        body.user_id = user_id;
        body.site_id = site_id;
        let mission = new Mission(body);
        const res = await mission.save(mission)
        return res;
    } catch (error) {
        console.log(error);
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @ updates the mission details 
 */
exports.updateMission = async (body, user_id, site_id, mission_id) => {
    try {
        let query = {
            name: body.name,
            speed: body.speed,
            alt: body.alt,
            waypoints: body.waypoints
        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Mission.findOneAndUpdate({ _id: mission_id, user_id: user_id, site_id: site_id }, query, { new: true })
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}


/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @ soft delete  mission
 */
exports.deleteMission = async (user_id, site_id, mission_id) => {
    try {
        let res = await Mission.findOneAndUpdate({ _id: mission_id, user_id: user_id, site_id: site_id },
            { status: "INACTIVE" })
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}

/**
 * 
 * @param {*} user_id 
 * @param {*} site_id 
 * @param {*} mission_id 
 * @returns the mission details
 */
exports.fetchMission = async (user_id, site_id, mission_id) => {
    try {
        let query = {
            _id: mission_id,
            user_id: user_id,
            site_id: site_id
        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Mission.find(query);
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}