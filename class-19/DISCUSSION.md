# Readings: Message Queues

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### Message Queues

A Queue server runs independently, and is tasked with routing events and messaging between clients.

- Any connected client can "publish" a message into the server.
- Any connected client can "subscribe" to receive messages by type.

The Queue server has the ability to see which clients are connected,  to which Queues they are attached and further, to which events they are subscribed.

The Queue server is tasked with receiving any published message and then distributing it out to all connected and subscribed clients. It must further ensure that subscribed clients can "catch up" and pull down any messages that they might have missed during a period of disconnection with the server

#### What is a message?

- A message is a package of information, categorized by queue and event
- `queue` - Which general bucket does this message belong
  - i.e. "Database Events", "Filesystem Events", "Network Events", etc
- `event` - What event has happened
  - i.e. "delete, add, update, connection lost, error", etc.
- `payload` - data associated with the event
  - i.e. "record id, record information, error text", etc.

#### Real Time vs Queued Messaging

In some cases, messages are simply brokered by the server. They come in, are processed and are immediately broadcast out to subscribers. Should a subscriber at any point lose connection with the server, any messages broadcast by the server will clearly be missed by the client.  These are known as "Real Time" messaging systems.

A true "Queue" will keep track of the delivery status of every event/message. Any broadcast that is not received by a subscriber will remain "in the queue" until it can be delivered. In this type of systems, rather than a broadcasting of messages, clients will likely "poll" the server to retrieve any messages "in the queue" for them, on their own timeline/schedule.

#### **Use Case**

- An API server responds to a POST request
  - User's access rights are confirmed
  - The data is analyzed and normalized
  - The data is sent to the database for saving
  - The database "publishes" a message into the queue
    - Queue: DB
    - Event: CREATE
    - Payload: JSON Object containing the created record
  - The API server sends information back to it's client as normal
- Elsewhere ...
  - A logging application is connected to the queue
    - It has subscribed to the "DB" Queue and is listening for `CREATE` events
    - When the above transaction happens, the logger "hears" the `CREATE` event and logs some details to it's logging database and updates some summary data.
  - A web based 'dashboard' application is running and is connected to the queue
    - It also subscribes to `DB`/`CREATE`
    - When this event happens, it updates a counter in the browser for the operator to see that a new record was created.
  - A monitor application is running and is connected to the queue
    - It also subscribes to `DB`/`CREATE`
    - When this event happens, it sends a text to all sales people alerting them that a new customer account was created.
  - ... and so on.

## Additional Resources

### Videos

### Bookmark/Skim

- [Rooms and Namespaces](https://socket.io/docs/rooms-and-namespaces/){:target="_blank"}
- [Socket.io Emit Cheatsheet](https://socket.io/docs/emit-cheatsheet/){:target="_blank"}
