import kafka from "./client.js";

const producer = kafka.producer();

// Connect the producer
await producer.connect();

export default producer