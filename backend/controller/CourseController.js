const asyncHandler = require("express-async-handler")
const Course = require("../models/CourseModel")
const Anousement = require("../models/AnousementModel")

const CreateCourse =asyncHandler(async(req,res)=>{
try{
    const {name,code,description,credit,faculty,lecturer,semester,acYear} = req.body

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
        semester,
        acYear
    })
    console.log("Added");

    //annousement
    await Anousement.create({
        title:`The new Course added for ${faculty} student`,
        anousement:`The ${code} - ${name} course added for ${faculty} student. It's ${credit} course. Make sure your study will be good`,
        semester:semester,
        acYear:acYear,
        faculty:faculty

    })

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
            lecturer,
            semester,
            acYear
        } = cource

        cource.name = req.body.name || name
        cource.code = req.body.code || code
        cource.description = req.body.description || description
        cource.credit = req.body.credit || credit
        cource.faculty = req.body.faculty || faculty
        cource.lecturer = req.body.lecturer || lecturer
        cource.semester = req.body.semester || semester
        cource.acYear = req.body.acYear || acYear

        const updateCourese = await cource.save()
        console.log(updateCourese);
        res.status(200).json(updateCourese)

        //anousement
        await Anousement.create({
            title:`The Course details update for ${faculty} student`,
            anousement:`The ${code} - ${name} course updated for ${faculty} student. Now it's ${credit} course. Make sure your study will do good.`,
            semester:semester,
            acYear:acYear,
            faculty:faculty
    
        })
                
        
    }catch (error) {
        console.error("Error Update:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const  deleteCourse = asyncHandler(async(req,res)=>{
    try{
        const  courceid = req.params.courceid
        const deletecourse = await Course.findById(courceid);

        //anousement
        await Anousement.create({
            title:`The Course removed for ${deletecourse.faculty} student`,
            anousement:`The ${deletecourse.code} - ${deletecourse.name} course removed for ${deletecourse.faculty} student.it's ${deletecourse.credit} course. We will added new module soon as later.`,
            semester:deletecourse.semester,
            acYear:deletecourse.acYear,
            faculty:deletecourse.faculty
    
        })
        await Course.deleteOne({_id:courceid});

        res.status(202).json({message: "This cource deleted successfull"})

    }catch (error) {
        console.error("Error Delete:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


module.exports={
    CreateCourse,
    getAllCourses,
    getByIdCourse,
    updateCourse,
    deleteCourse
}