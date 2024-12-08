import studentmodel from "../DB/Model.js";

export async function Get_Students (req, res) {
    const studentsarr = await studentmodel.find()
    console.log('Students find from mongodb >>', studentsarr);
    res.send({Students: studentsarr, message: "Students fetched successfully"})
    
}