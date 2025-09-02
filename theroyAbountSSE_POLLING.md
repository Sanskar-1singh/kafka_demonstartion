web application were initially developed around a client server model where  the web client is always the iniator of transaction like requesting data from server,thus there was no mechanism for the server to indepenedently send or push data to the client first making a request.

Long polling is a technique used in client-server communication to wait for new data without constantly sending requests. It’s often used when you want near-real-time updates but don’t want the overhead of continuous polling.

Here’s how it works:

1️⃣ Regular Polling
Client asks the server: “Do you have new data?”
Server immediately responds, even if there’s nothing new.

Client waits a bit and asks again.
Problem: lots of empty requests → waste of resources.

2️⃣ Long Polling
Client asks the server: “Give me new data.”

Server holds the request open until either:
There is new data, or

A timeout occurs (e.g., 30 seconds)
Once the server responds, the client immediately sends another request.
This reduces unnecessary requests and gives faster data delivery than regular polling.


1-normal http request and response http 1.1/https/http 2.0>>>>
2-normal polling
3-long polling
4-server sent event
5-websocket




websocket->

websocket provide full duplex communication channel over tcp connection it is persistent connection between a client and server that both parties can use start sending data at any time.
the client establishes a websocket connection through a process known as the websocket handshake,if the process succed then the server and client can exchange data in both the direction at anyt time.the websocket protocol enables the communication between a client and a server with lower overhead,faciliating
real time data transfer from and to server,
this is made possible by providing a standarised way forthe server to send content to the client without being asked and allowing for message to be passed back and forth while keeping the conenction open>>>


SERVER SENT EVENTS->

sse is a standarised for unidirectional communication from a server to a client over a single http connection.in sse the client open a persistent connection to the server which then continously send updates
to the client as new data becomes available this communiaction patterns is particularly useful for applications that requires real time notifications or updates suchas news feed livescore,stock prices,sse 
uses the text/event streamMIME typeand is natively supported by modern browser through the eventSourceAPI>>>


difference between SSE and websocket

websocket->bidirectional communication  it allow for full duplex communiaction,meaning that both the client the server can send and recieve messaage independently and simulatneously

SSE->unidirectional communication SSE only allows the server to send data to the client the client cannot send data back through the same connection.if the client needs to communicate with the server it must do so using a separte http request>>