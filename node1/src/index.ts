import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer();

const start = async () => {
  await producer.connect();

  setInterval(() => {
    console.log("producing a message");
    producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS user!" }],
    });
  }, 1000);
};

start();
