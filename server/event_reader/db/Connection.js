import mongoose from "mongoose";

class Connection {

    constructor() {
        // MongoDB connection URL
        this.url = 'mongodb://localhost:27017';
        // MongoDB database name
        this.dbName = 'events';
        // MongoDB collection name
        this.collectionName = 'events';
    }

    async connectToMongoDB() {
        try {
            await mongoose.connect(`${this.url}/${this.dbName}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('Failed to connect to MongoDB:', err);
            process.exit(1);
        }
    }

    close() {
        mongoose.connection.close();
    }

    setDbName(dbName) {
        this.dbName = dbName;
    }
}

export default Connection;
