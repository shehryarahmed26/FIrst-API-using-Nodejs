import usermodel from "../DB/Usermodel.js";

export async function Get_Users (req, res) {
    const users = await usermodel.find()
    res.send({Users: users, message: 'Users get successfully'})
}