const mongoose = require("mongoose");

const EnrollSchema= mongoose.Schema(
    {
        refid: {
            type: String,
            required: true
        },
        Sid: {
            type: String,
            required: true
        },
        semester: {
            type: Number
        },
        acYear: {
            type: Number
        },
        faculty: {
            type: String
        }
    },
    {
        timestamps: true
    }
);






const Enroll = mongoose.model("enroll",EnrollSchema)

module.exports = Enroll;
