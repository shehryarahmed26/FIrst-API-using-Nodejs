import studentmodel from "../DB/Model.js";

export async function Delete_Student (req, res) {
    const {id} = req.params
    const studentsarr = await studentmodel.findByIdAndDelete(id)
    res.json({status: 200, message: "Student Deleted Successfully"})
    
}