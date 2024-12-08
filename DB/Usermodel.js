import mongoose, { mongo, Schema } from "mongoose";
import { Mongoose } from "mongoose";

const userschema = new Schema(
    {
        username: mongoose.Schema.Types.String,
        email: mongoose.Schema.Types.String,
        password: mongoose.Schema.Types.String
    }
)
const usermodel = mongoose.model('users', userschema)
export default usermodel