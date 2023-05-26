"use strict";
var Response = require("../utils/response");
const conf = require("../conf/conf")
const axios = require("axios")
const categoryDB = require("../db/category.db")
const validate = require("../utils/validation")

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @ add category for drones and mission
 */
exports.addCategory = async function (body, user_id, drone_id, mission_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser

    if (!body.name || !body.category)
      return Response.InvalidReqBody

    if (drone_id && !validate.isValidMongooseObjectId(drone_id))
      return Response.InvalidDroneId

    if (mission_id && !validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId

    let valid = validate.isValidRegisterCategoryBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }

    const categoryData = await categoryDB.addCategory(body, user_id, drone_id, mission_id)
    return categoryData;

  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} category_id 
 * @param {*} drone_id 
 * @param {*} mission_id 
 * @ update category 
 */
exports.updateCategory = async function (body, user_id, category_id, drone_id, mission_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser

    if (drone_id && !validate.isValidMongooseObjectId(drone_id))
      return Response.InvalidSiteId
    if (mission_id && !validate.isValidMongooseObjectId(mission_id))
      return Response.InvalidMissionId

    let valid = validate.isValidRegisterCategoryBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }

    const CategoryData = await categoryDB.updateCategory(body, user_id, category_id, drone_id, mission_id)
    if (CategoryData)
      return CategoryData;
    else
      return Response.RecordNotFound
    //return res
  } catch (error) {
    console.log(error);
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};


/**
 * 
 * @param {*} user_id 
 * @param {*} category_id 
 * @ deletes the category 
 */
exports.deleteCategory = async function (user_id, category_id) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!validate.isValidMongooseObjectId(category_id))
      return Response.InvalidCategoryId
    const categoryData = await categoryDB.deleteCategory(user_id, category_id)
    if (categoryData)
      return Response.CategoryDeleted;
    else
      return Response.RecordNotFound

    //return res
  } catch (error) {
    console.log(error);
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} user_id 
 * @param {*} category 
 * @returns mission by category
 */
exports.missionCategory = async function (user_id, category) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser

    if (!category)
      return Response.InvalidCategory
    const MissionData = await categoryDB.missionCategory(user_id, category)
    if (MissionData.length)
      return MissionData
    else
      return Response.RecordNotFound

    //return res
  } catch (error) {
    console.log(error);
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};

/**
 * 
 * @param {*} user_id 
 * @param {*} category 
 * @returns drones by category
 */
exports.droneCategory = async function (user_id, category) {
  try {

    if (!user_id)
      return Response.UnauthorizedUser
    if (!category)
      return Response.InvalidCategory
    const MissionData = await categoryDB.droneCategory(user_id, category)
    if (MissionData.length)
      return MissionData
    else
      return Response.RecordNotFound

  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;

  }
};