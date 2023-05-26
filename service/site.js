"use strict";
var Response = require("../utils/response");
const validate = require("../utils/validation")
const { log } = require("console");
const siteDb = require("../db/site.db")
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @ creates site
 */
exports.createSite = async function (body, user_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!body.site_name || !body.position) {
      throw Response.InvalidReqBody
    }
    let valid = validate.isValidRegisterSiteBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const siteData = await siteDb.createSite(body, user_id)
    return siteData;

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
 * @ update site info 
 */
exports.updateSite = async function (body, user_id, site_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    let valid = validate.isValidRegisterSiteBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    const siteData = await siteDb.updateSite(body, user_id, site_id)
    if (siteData)
      return siteData;
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
 * @ delete site 
 */
exports.deleteSite = async function (user_id, site_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    const siteData = await siteDb.deleteSite(user_id, site_id)

    if (siteData.deletedCount)
      return Response.SiteDeleted;
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
 * @returns site information
 */
exports.getSite = async function (user_id, site_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(site_id))
      return Response.InvalidSiteId
    const siteData = await siteDb.getSite(user_id, site_id)

    if (siteData)
      return siteData;
    else
      return Response.RecordNotFound
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;


  }
};


