let response = require("./writer").respondWithCode;


exports.UnexpectedError = response(500, {
  message: "Internal server error"
});
exports.UserAlreadyExist = response(400, {
  message: "User already exist"
});

exports.InvalidEmail = response(400, {
  message: "Invalid Email id"
});
exports.InvalidSiteId = response(400, {
  message: "Invalid Site id"
});
exports.InvalidDroneId = response(400, {
  message: "Invalid Drone id"
});
exports.InvalidMissionId = response(400, {
  message: "Invalid Mission id"
});
exports.InvalidCategoryId = response(400, {
  message: "Invalid Category id"
})
exports.InvalidAlt = response(400, {
  message: "Invalid Altitude"
});
exports.InvalidSpeed = response(400, {
  message: "Invalid Speed"
});
exports.InvalidWaypoints = response(400, {
  message: "Invalid way points"
});
exports.InvalidUserName = response(400, {
  message: "Invalid name"
});
exports.InvalidCategory = response(400, {
  message: "Invalid Category"
});

exports.InvalidUserAndMail = response(400, {
  message: "Incorrect Email id or Password"
});

exports.InvalidPassword = response(400, {
  message: "Password should be string and length should be greater than 7"
});

exports.InvalidReqBody = response(400, {
  message: "Invalid Request body"
});
exports.UnauthorizedUser = response(403, {
  message: "Unauthorized user"
});

exports.SiteDeleted = response(200, {
  message: "Successfully Deleted"
});

exports.RecordNotFound = response(404, {
  message: "Record Not Found"
});
exports.MissionDeleted = response(200, {
  message: "Mission Successfully Deleted"
});
exports.CategoryDeleted = response(200, {
  message: "Category Successfully Deleted"
});
exports.DroneDeleted = response(200, {
  message: "Drone Successfully Deleted"
});

exports.InvalidSiteName = response(400, {
  message: "Invalid site name"
});


exports.InvalidPosition = response(400, {
  message: "Invalid Position"
});