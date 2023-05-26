var mongoose = require("mongoose");
var drones = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  make_name: {
    type: String,
    required: true
  },
  drone_type: {
    type: String,
    required: true
  },

  deleted_at: {
    type: Date,
    default: 0,
    required: true
  },
  deleted_by: {
    default: 0,
    type: String,
  },
  status: {
    default: "ACTIVE",
    type: String

  },

  site_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sites",
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }


}, { timestamps: true });

module.exports = mongoose.model("Drones", drones);
