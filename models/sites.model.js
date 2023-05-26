var mongoose = require("mongoose");
var sites = mongoose.Schema({
  site_name: {
    type: String,
    required: true
  },
  position: {
    latitude: { type: String },
    longitude: { type: String }
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Sites", sites);
