const mongoose = require("mongoose");

const TimeTableSchema= mongoose.Schema(
    {

        faculty:{
            type:String,
        },

        semester:{
            type:Number,
        },

        year:{
            type:Number,
        },

        monday:{
            details8_30to10_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details10_30to12_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details1_30to3_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details3_30to5_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
        },

        tuesday:{
            details8_30to10_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details10_30to12_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details1_30to3_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details3_30to5_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
        },

        wednesday:{
            details8_30to10_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details10_30to12_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details1_30to3_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details3_30to5_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },        },


        thursday:{
            details8_30to10_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details10_30to12_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details1_30to3_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details3_30to5_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
        },

        friday:{
            details8_30to10_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details10_30to12_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details1_30to3_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
    
            details3_30to5_30:{
                courseid:{type:String, default:"none"},
                hallId:{type:String,default:"none"}
            },
        }


        


    },

    {
        timestamps:true
    }
);





const TimeTable = mongoose.model("timetable",TimeTableSchema)

module.exports = TimeTable;
