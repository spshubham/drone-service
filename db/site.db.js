const Site = require("../models/sites.model");
const Response = require("../utils/response");


/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @creates a site 
 */
exports.createSite = async (body, user_id) => {
    try {
        body.user_id = user_id;
        let site = new Site(body);
        const res = await site.save(site)
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
 * @ updates the site information 
 */
exports.updateSite = async (body, user_id, site_id) => {
    try {
        let query = {
            site_name: body.site_name,
            position: body.position
        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Site.findOneAndUpdate({ _id: site_id, user_id: user_id }, query, { new: true })
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
 * @ deletes the site  
 */

exports.deleteSite = async (user_id, site_id) => {
    try {
        let res = await Site.deleteOne({ _id: site_id, user_id: user_id })
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
 * @returns site info
 */
exports.getSite = async (user_id, site_id) => {
    try {
        let res = await Site.find({ _id: site_id, user_id: user_id })
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}