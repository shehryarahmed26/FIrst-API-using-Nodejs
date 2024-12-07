import mongoose, { Mongoose } from "mongoose";
import { Schema } from "mongoose";
const Studentschema = new Schema(
    {
        Name: mongoose.Schema.Types.String,
        Rollnumber: mongoose.Schema.Types.Number,
        Course: mongoose.Schema.Types.String
    }
)
export default model = mongoose.model('Students', Schema)
