import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka-1:9092', 'kafka-2:9093'],
});

export default kafka;
