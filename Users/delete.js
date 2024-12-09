import usermodel from "../DB/Usermodel.js";

export async function Delete_Users (req, res) {
    const {id} = req.params
    const users = await usermodel.findByIdAndDelete(id)
    // users.save()
    res.json({status: 200, message: 'Users Delete successfully'})
}