import express from 'express';
import bodyParser from 'body-parser';

import eventRoute from './routes/eventRoute.js';
import Connection from './db/connection.js';

import producer from './kafka/producer.js';
import consumer from './kafka/consumer.js';
import Event from "./model/event.js";

const app = express();
app.use(bodyParser.json());

//establish mongo connection
Connection.connect();

app.post('/events', eventRoute);

// Connect the producer
producer.connect().then(() => {
    // Start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
        runConsumer().catch((error) => {
            console.error('Failed to start Kafka consumer:', error);
            process.exit(1);
        });
    });
});

async function runConsumer() {

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = message.value.toString();
            try {
                const jsonValue = JSON.parse(value);
                const newEvent = new Event(jsonValue);

                newEvent.save()
                    .then(() => {
                        console.log(`${value} saved succesfully`);
                    })
                    .catch(err => {
                        console.error(`Failed to save event: ${value}`);
                    });
            } catch (e) {
                console.error(`Failed to save event: ${value}`);
            }

        },
    });
}