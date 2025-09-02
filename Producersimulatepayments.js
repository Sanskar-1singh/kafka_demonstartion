const kafka = require("kafka-node");
const Producer = kafka.Producer;

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

const producer = new Producer(client);

  let paymentEvent = {
    orderId: "12345",
    status: "SUCCESS",
    amount: 250.0,
    itemId: "item1",
  };
    paymentEvent = JSON.stringify(paymentEvent);
producer.on("ready", function check() {
  console.log("Producer is ready");

});
const payloads = [
  { topic: "payment-topic", messages: paymentEvent, partition: 0 },
];

producer.send(payloads, function check(err, data) {
  if (err) {
    console.log("Error in sending payment event", err);
  } else {
    console.log("Payment event sent successfully", data);
  }
});

producer.on("error", function (err) {
  console.log("Error in producer", err);
}
);

