import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const start = async () => {
  await consumer.connect();
  
  await consumer.subscribe({ topic: "test-topic", fromBeginning: false });
  
  consumer.run({
    eachMessage: async ({ message }) => {
      console.log({
        timestamp: message.timestamp,
        value: message.value.toString(),
      });
    },
  });
};

start();
