import kafka from "./client.js";

const consumer = kafka.consumer({ groupId: 'sugar-events' });

// Connect the consumer
await consumer.connect();

// Subscribe to a topic
await consumer.subscribe({ topic: 'events', fromBeginning: true });

export default consumer;
