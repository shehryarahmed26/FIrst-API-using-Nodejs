import studentmodel from "../DB/Model.js";

export async function Update_Student (req, res) {
    const {id} = req.params
    const updateddata = req.body
    const studentsarr = await studentmodel.findByIdAndUpdate(id, updateddata)
    studentsarr.save()
    console.log('Students find from mongodb >>', studentsarr);
    res.json({status: 200, Student: studentsarr, message: "Student Updated Successfully"})
    
}