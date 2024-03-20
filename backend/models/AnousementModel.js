const mongoose = require("mongoose");

const AnousementSchema= mongoose.Schema(
    {
        title:{
            type:String
        },
        anousement: {
            type: String,
        },
        semester: {
            type: Number,
            default:0
        },
        acYear: {
            type: Number,
            default:0
        },
        faculty: {
            type: String,
            default:"All"
        }
    },
    {
        timestamps: true
    }
);






const Anousement = mongoose.model("annousement",AnousementSchema)

module.exports = Anousement;
