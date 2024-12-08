import usermodel from "../DB/Usermodel.js"

export async function User_login (req, res) {
    const {email, password} = req.body
    const user = await usermodel.findOne({email, password})
    console.log(user);
    
    if (user) {
        res.send({status: 200, message: 'user login'})
    }
    else {
        res.send({status: 500, message: 'Invalid Email or password'})
    }
}