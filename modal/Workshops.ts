import mongoose from "mongoose";

const {Schema} = mongoose;

const WorkshopSchema = new Schema({
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
export default mongoose.models.Workshop || mongoose.model('Workshop', WorkshopSchema
)