import mongoose from "mongoose";

// Define the Event model schema
const eventSchema = new mongoose.Schema({
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
        default: Date.now
    }
});

eventSchema.index({ emmitter_id: 1 }, { background: true });
eventSchema.index({ type: 1 }, { background: true });


const Event = mongoose.model('Event', eventSchema);

export default Event;