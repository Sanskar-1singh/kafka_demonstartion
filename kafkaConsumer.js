const kafka=require('kafka-node');
const Consumer=kafka.Consumer;

//this line represent that it create client which will connect to kafka broker/server
const client=new kafka.KafkaClient({kafkaHost:'localhost:9092'});

const consumer=new Consumer(client,
    [{topic:'payment-topic',partition:0}],
{
    autoCommit:true,
    groupId:'payment-group'
});

 module.exports=consumer;
