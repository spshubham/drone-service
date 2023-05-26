const Drone = require("../models/drone.models");
const Response = require("../utils/response");

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} site_id 
 * @returns add the drones
 */
exports.addDrone = async (body, user_id, site_id) => {
    try {
        body.user_id = user_id;
        body.site_id = site_id;
        let drone = new Drone(body);
        const res = await drone.save(drone)
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
 * @param {*} drone_id 
 * @update the drone info 
 */
exports.updateDrone = async (body, user_id, site_id, drone_id) => {
    try {
        let query = {
            name: body.name,
            drone_type: body.drone_type,
            make_name: body.make_name
        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Drone.findOneAndUpdate({ _id: drone_id, user_id: user_id, site_id: site_id }, query, { new: true })
        return res;
    } catch (error) {
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
 * @param {*} drone_id 
 * @ update the drone with given site 
 */
exports.updateDroneSite = async (body, user_id, site_id, drone_id) => {
    try {

        let res = await Drone.findOneAndUpdate({ _id: drone_id, user_id: user_id }, { site_id: site_id }, { new: true })
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
 * @param {*} drone_id 
 * @ soft delete for the drone 
 */
exports.deleteDrone = async (user_id, site_id, drone_id) => {
    try {
        let res = await Drone.findOneAndUpdate({ _id: drone_id, user_id: user_id, site_id: site_id, status: "ACTIVE" },
            { deleted_at: Date.now(), deleted_by: user_id, status: "INACTIVE" })
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
 * @param {*} drone_id 
 * @returns drone information
 */
exports.fetchDrone = async (user_id, site_id, drone_id) => {
    try {
        let query = {
            _id: drone_id,
            user_id: user_id,
            site_id: site_id
        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Drone.find(query);
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}