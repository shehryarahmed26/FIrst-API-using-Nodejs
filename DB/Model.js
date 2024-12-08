import mongoose, { Schema } from "mongoose";


const Studentschema = new Schema(
    {
        Name: mongoose.Schema.Types.String,
        Rollnumber: mongoose.Schema.Types.Number,
        Course: mongoose.Schema.Types.String
    }
)
const studentmodel = mongoose.model('Students', Studentschema)
export default studentmodel 


