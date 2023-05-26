const { default: mongoose } = require("mongoose");
const emailRegex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,5}$/;
const response = require("./response");

const URL = require("url").URL;

/**
 * 
 * @param {*} email 
 * @returns validate the email
 */
exports.isEmail = (email) => {
    return emailRegex.test(email);
}
exports.isValidMongooseObjectId = (id) => {
    return mongoose.isValidObjectId(id);
}
/**
 * 
 * @param {*} body 
 * @returns validate the user req.body
 */
exports.isValidRegisterUserBody = (body) => {
    try {

        if (typeof body.password != "string" || body.password.length < 8) {
            return {
                isValid: false,
                payload: response.InvalidPassword
            }
        }
        if (!this.isEmail(body.email)) {
            return {
                isValid: false,
                payload: response.InvalidEmail
            }
        }
        if (typeof body.name != "string" || body.name.trim().length < 1) {
            return {
                isValid: false,
                payload: response.InvalidUserName
            }
        }
        return {
            isValid: true
        }
    } catch (err) {
        return {
            isValid: false,
            payload: response.InvalidReqBody
        }
    }

}
/**
 * 
 * @param {*} body 
 * @validate the site req.body 
 */
exports.isValidRegisterSiteBody = (body) => {
    try {

        if (typeof body.site_name != "string" || body.site_name.length < 1) {
            return {
                isValid: false,
                payload: response.InvalidSiteName
            }
        }

        if (body.position && typeof body.position != "object") {
            return {
                isValid: false,
                payload: response.InvalidPosition
            }
        }
        if (body.position) {
            if (!body.position.latitude || !body.position.longitude) {
                return {
                    isValid: false,
                    payload: response.InvalidPosition
                }
            }
        }
        return {
            isValid: true
        }
    } catch (err) {
        return {
            isValid: false,
            payload: response.InvalidReqBody
        }
    }

}

/**
 * 
 * @param {*} body 
 * @validate the mission req.body 
 */
exports.isValidRegisterMissionBody = (body) => {
    try {

        if (typeof body.alt != "number") {
            return {
                isValid: false,
                payload: response.InvalidAlt
            }
        }
        if (typeof body.speed != "number") {
            return {
                isValid: false,
                payload: response.InvalidSpeed
            }
        }
        if (typeof body.name != "string" || body.name.trim().length < 1) {
            return {
                isValid: false,
                payload: response.InvalidUserName
            }
        }

        if (!Array.isArray(body.waypoints)) {
            return {
                isValid: false,
                payload: response.InvalidWaypoints
            }
        }
        if (Array.isArray(body.waypoints)) {
            for (let i of body.waypoints) {
                if ((!i.alt) || (!i.lat) || (!i.lng)) {
                    return {
                        isValid: false,
                        payload: response.InvalidWaypoints
                    }
                }
            }
        }
        return {
            isValid: true
        }
    } catch (err) {
        return {
            isValid: false,
            payload: response.InvalidReqBody
        }
    }

}

/**
 * 
 * @param {*} body 
 * @validate the drone req.body  
 */
exports.isValidRegisterDroneBody = (body) => {
    try {

        if (typeof body.name != "string" || body.make_name.trim().length < 1) {
            return {
                isValid: false,
                payload: response.InvalidAlt
            }
        }
        if (typeof body.drone_type != "string" || body.make_name.trim().length < 1) {
            return {
                isValid: false,
                payload: response.InvalidSpeed
            }
        }
        if (typeof body.make_name != "string" || body.make_name.trim().length < 1) {
            return {
                isValid: false,
                payload: response.InvalidUserName
            }
        }


        return {
            isValid: true
        }
    } catch (err) {
        return {
            isValid: false,
            payload: response.InvalidReqBody
        }
    }

}

/**
 * 
 * @param {*} body 
 * @validate the category req.body  
 */
exports.isValidRegisterCategoryBody = (body) => {
    try {

        if (body.name && (typeof body.name != "string" || body.name.trim().length < 1)) {
            return {
                isValid: false,
                payload: response.InvalidUserName
            }
        }
        if (body.category && (typeof body.category != "string" || body.category.trim().length < 1)) {
            return {
                isValid: false,
                payload: response.InvalidCategory
            }
        }
        return {
            isValid: true
        }
    } catch (err) {
        return {
            isValid: false,
            payload: response.InvalidReqBody
        }
    }

}

