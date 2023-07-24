import mongoose from "mongoose";

class Connection {
    static connect() {
        // MongoDB connection
        mongoose.connect('mongodb://mongo:27017/events', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch(err => {
            console.error('Failed to connect to MongoDB:', err);
            process.exit(1);
        });
    }
}

export default Connection;
