import usermodel from "../DB/Usermodel.js";

export async function Add_Users (req, res) {
    const user = req.body
    const users = await usermodel(user)
    users.save()
    res.send({status: 200, User: user, message: 'Users Added successfully'})
}