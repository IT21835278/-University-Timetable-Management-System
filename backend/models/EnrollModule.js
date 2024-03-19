const mongoose = require("mongoose");

const EnrollSchema= mongoose.Schema(
    {
        userdetails:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"User",
        },

        studentid:{
            type:String,
        },

        semester:{
            type:Number,

        },

        acYear:{
            type:Number
        },

        faculty:{
            type:String
        }

        


    },

    {
        timestamps:true
    }
);





const Enroll = mongoose.model("enroll",EnrollSchema)

module.exports = Enroll;
