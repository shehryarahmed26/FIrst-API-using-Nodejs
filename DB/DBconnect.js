import mongoose  from "mongoose";
const DBConnection = () => {
mongoose.connect(`mongodb+srv://shehryar:shehryar@cluster0.ugo70.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
mongoose.connection.on('connected', () => {
    console.log('DB Connected');
    
})
}
export default DBConnection