const mongoose = require("mongoose");

const CourceSchema= mongoose.Schema(
    {

        name:{
            type:String,
        },

        code:{
            type:String,
            unique:true
        },

        description:{
            type:String,
        },

        credit:{
            type:Number,
        },

        faculty:{
            type:String,
        },

        


    },

    {
        timestamps:true
    }
);





const Course = mongoose.model("course",CourceSchema)

module.exports = Course;
