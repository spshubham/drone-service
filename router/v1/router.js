var express = require("express");
var router = express.Router();
const siteController = require("../../controllers/v1/site");
const dronerController = require("../../controllers/v1/drone")
const userController = require("../../controllers/v1/user")
const missionController = require("../../controllers/v1/mission")
const categoryController = require("../../controllers/v1/category")
const auth = require("../../middleware/auth");


/*User API Routes */
router.post("/user/signup", function(req, res, next){
  userController.signUp(req, res, next, req.body);
});
router.get("/user/login", function(req, res, next){
  userController.getDetails(req, res, next, req.query["email"], req.query["password"]);
});

/**SITE's API routes */
router.post("/create/site",auth, function(req, res, next){ 
  siteController.createSite(req, res, next);
});
router.put("/update/site",auth, function(req, res, next){ 
  siteController.updateSite(req, res, next);
});
router.delete("/delete/site",auth, function(req, res, next){ 
  siteController.deleteSite(req, res, next);
});
router.get("/get/site",auth, function(req, res, next){
  siteController.getSite(req, res, next);
});

/**DRONE API routes */
router.post("/add/drone",auth, function(req, res, next){
  dronerController.addDrone(req, res, next);
});
router.put("/update/drone",auth, function(req, res, next){
  dronerController.updateDrone(req, res, next);
});
router.delete("/delete/drone",auth, function(req, res, next){
  dronerController.deleteDrone(req, res, next);
});
router.get("/fetch/drone",auth, function(req, res, next){
  dronerController.fetchDrone(req, res, next);
});
router.put("/update/drone/site",auth, function(req, res, next){
  dronerController.updateDroneSite(req, res, next);
});

/**MISSION API routes */
router.post("/create/mission",auth, function(req, res, next){
  missionController.addMission(req, res, next);
});
router.put("/update/mission",auth, function(req, res, next){
  missionController.updateMission(req, res, next);
});
router.delete("/delete/mission",auth, function(req, res, next){
  missionController.deleteMission(req, res, next);
});
router.get("/fetch/mission",auth, function(req, res, next){
  missionController.fetchMission(req, res, next);
});



/**CATEGORY API routes */
router.post("/add/category",auth, function(req, res, next){
  categoryController.addCategory(req, res, next);
});
router.put("/update/category",auth, function(req, res, next){
  categoryController.updateCategory(req, res, next);
});
router.delete("/delete/category",auth, function(req, res, next){
  categoryController.deleteCategory(req, res, next);
});
router.get("/mission/category",auth, function(req, res, next){
  categoryController.missionCategory(req, res, next);
});
router.get("/drone/category",auth, function(req, res, next){
  categoryController.droneCategory(req, res, next);
});



module.exports = router;
