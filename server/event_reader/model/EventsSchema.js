import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    emmitter_id: String,
    type: String,
    module: String,
    record_name: String,
    record_id: String,
    user_id: String,
    user_name: String,
    message: String,
    time_spent: Number,
    date_entered: {
        type: Date,
        default:Date.now
    }
});

let eventsModel =  mongoose.model('Event', eventsSchema) 

export default eventsModel;
