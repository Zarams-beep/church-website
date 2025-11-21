import mongoose from "mongoose";

const {Schema} = mongoose;

const RetreatSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true},
    description:{
        type:String,
        required:true},
    date:{
        type:String,
        required:true},
    linkpage:{
        type:String,
        required:true}
});
export default mongoose.models.Retreat || mongoose.model('Retreat', RetreatSchema
)