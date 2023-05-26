var mongoose = require("mongoose");
var mission = mongoose.Schema({
    alt: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
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
    },
    status: {
        default: "ACTIVE",
        type: String

    },
    waypoints: [
        {
            alt: {
                type: Number,
                required: true
            },
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    ]


}, { timestamps: true });



module.exports = mongoose.model("Mission", mission);
