const mongoose = require("mongoose");

const HallSchema= mongoose.Schema(
    {

        hallName:{
            type:String,
            unique:true
        },

        capacity:{
            type:Number,
            default:0,
        },

        typeofhall:{
            type:String,
            default:'none'
        },

        

        monday:{
            time8_30to10_30:{type:Boolean, default:false},
            time10_30to12_30:{type:Boolean, default:false},
            time1_30to3_30:{type:Boolean, default:false},
            time3_30to5_30:{type:Boolean, default:false},
            
        },

        tuesday:{
            time8_30to10_30:{type:Boolean, default:false},
            time10_30to12_30:{type:Boolean, default:false},
            time1_30to3_30:{type:Boolean, default:false},
            time3_30to5_30:{type:Boolean, default:false},
        },

        wednesday:{
            time8_30to10_30:{type:Boolean, default:false},
            time10_30to12_30:{type:Boolean, default:false},
            time1_30to3_30:{type:Boolean, default:false},
            time3_30to5_30:{type:Boolean, default:false},
        },

        thursday:{
            time8_30to10_30:{type:Boolean, default:false},
            time10_30to12_30:{type:Boolean, default:false},
            time1_30to3_30:{type:Boolean, default:false},
            time3_30to5_30:{type:Boolean, default:false},
        },

        friday:{
            time8_30to10_30:{type:Boolean, default:false},
            time10_30to12_30:{type:Boolean, default:false},
            time1_30to3_30:{type:Boolean, default:false},
            time3_30to5_30:{type:Boolean, default:false},
        },

        


    },

    {
        timestamps:true
    }
);





const Hall = mongoose.model("halls",HallSchema)

module.exports = Hall;
