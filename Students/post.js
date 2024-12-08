import studentmodel from "../DB/Model.js";

export async function Add_Student (req, res) {
    const student = req.body
    const studentsarr = await studentmodel(student)
    studentsarr.save()
    res.send({status: 200, Student: student, message: "Student Added Successfully"})
    
}