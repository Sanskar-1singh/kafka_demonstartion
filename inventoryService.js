const consumer = require("./kafkaConsumer");

const payrmentEvent = require("./payment");

const inventory = {
  item1: 10,
  item2: 20,
  item3: 15,
  item4: 5,
};

const updateInventory = function(paymentEvent) {
  const quantityToReduce = 1;
  const item = paymentEvent.itemId;

  if (inventory[item] !== undefined && paymentEvent.status === "SUCCESS") {
    inventory[item] -= quantityToReduce;
    console.log(
      `Inventory updated for orderId: ${paymentEvent.orderId}. New inventory for ${item}: ${inventory[item]}`
    );
  } else {
    console.log(
      `No inventory update needed for orderId: ${paymentEvent.orderId} with status: ${paymentEvent.status}`
    );
  }
};

consumer.on("message", (message) => {
  try {
    const paymentEvent = JSON.parse(message.value);
    updateInventory(paymentEvent);
  } catch (err) {
    console.error("Error parsing message", err);
  }
});
