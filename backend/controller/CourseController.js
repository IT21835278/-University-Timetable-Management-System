const asyncHandler = require("express-async-handler")
const Course = require("../models/CourseModel")

const CreateCourse =asyncHandler(async(req,res)=>{
try{
    const {name,code,description,credit,faculty,lecturer,sesmester,acYear} = req.body

    const courseExist = await Course.findOne({code})
    if(courseExist){
        res.status(400)
        throw new Error("This course code alrady use")
    }

    const course = await Course.create({
        name,
        code,
        description,
        credit,
        faculty,
        lecturer,
        sesmester,
        acYear
    })
    console.log("Added");
    res.status(201).json(course)


}catch (error) {
    console.error("Error occour adding course:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}

})

const getAllCourses = asyncHandler(async(req,res)=>{
    try{
        const course = await Course.find();
        res.json(course)

    }catch (error) {
    console.error("Error occour adding course:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}
})


const getByIdCourse = asyncHandler(async(req,res)=>{
    try{
        const courseid = req.params.courseid
        const course = await Course.findById(courseid)
        res.json(course)

    }catch (error) {
    console.error("Error occour Getting by params:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}
})

const updateCourse = asyncHandler(async(req,res)=>{
    try{
        const cource = await Course.findById(req.params.courseid);
        const {
            name,
            code,
            description,
            credit,
            faculty,
        } = cource

        cource.name = req.body.name || name
        cource.code = req.body.code || code
        cource.description = req.body.description || description
        cource.credit = req.body.credit || credit
        cource.faculty = req.body.faculty || faculty

        const updateCourese = await cource.save()
        console.log(updateCourese);
        res.status(200).json(updateCourese)
                
        
    }catch (error) {
        console.error("Error Update:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


module.exports={
    CreateCourse,
    getAllCourses,
    getByIdCourse,
    updateCourse
}