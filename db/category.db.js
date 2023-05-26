const Category = require("../models/category.model");
const Response = require("../utils/response");

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @param {*} drone_id 
 * @param {*} mission_id 
 * @add the categories for drones and missions 
 */
exports.addCategory = async (body, user_id, drone_id, mission_id) => {
    try {
        body.user_id = user_id;
        body.mission_id = mission_id;
        body.drone_id = drone_id
        let category = new Category(body);
        const res = await category.save(category)
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
 * @param {*} category_id 
 * @param {*} drone_id 
 * @param {*} mission_id 
 * @update the category info 
 */
exports.updateCategory = async (body, user_id, category_id, drone_id, mission_id) => {
    try {
        let query = {
            name: body.name,
            category: body.category,
            drone_id: drone_id,
            mission_id: mission_id

        }
        Object.keys(query).forEach((key) => typeof query[key] === "undefined" && delete query[key])
        let res = await Category.findOneAndUpdate({ _id: category_id, user_id: user_id }, query, { new: true })
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
 * @param {*} category_id 
 * @soft delete the category info 
 */
exports.deleteCategory = async (user_id, category_id) => {
    try {

        let res = await Category.findOneAndUpdate({ _id: category_id, user_id: user_id, status: "ACTIVE" },
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
 * @param {*} category 
 * @returns missions based on category
 */
exports.missionCategory = async (user_id, category) => {
    try {

        let res = await Category.find({ user_id: user_id, category: category }).populate("mission_id")
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
 * @param {*} category 
 * @returns drones based on the category
 */
exports.droneCategory = async (user_id, category) => {
    try {

        let res = await Category.find({ user_id: user_id, category: category }).populate("drone_id")
        return res;
    } catch (error) {
        if (error.code == 11000)
            throw Response.UserAlreadyExist;
        else throw Response.UnexpectedError;
    }
}
