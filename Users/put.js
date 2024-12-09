import usermodel from "../DB/Usermodel.js";

export async function update_Users (req, res) {
    const user = req.body
    const {id} = req.params
    const users = await usermodel.findByIdAndUpdate(id, user)
    users.save()
    res.json({status: 200, updatedUser: users, message: 'Users updated successfully'})
}