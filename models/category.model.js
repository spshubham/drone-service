var mongoose = require("mongoose");
var category = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "ACTIVE"
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  mission_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mission"

  },
  drone_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drones"

  },

}, { timestamps: true });

module.exports = mongoose.model("Category", category);
