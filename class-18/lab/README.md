# LAB:

Create an multi-server, event driven application that uses only events transmitted over a network, using socket.io to trigger logging based on activity.

We're going to continue working on the application for a company called **CAPS** - The Code Academy Parcel Service

**CAPS** will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when delivered, be notified that their customers received what they purchased.

As you can imagine, the CAPS system, the Vendors and the Drivers will all be on different computers and can't be using the same running application, so we'll need a way to keep everything in sync over the network.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

The application must:

- Support multiple users on different machines communicating to one another
- Simulate the order and delivery of an item from a vendor to a customer
- The vendor should alert the system of a package to be delivered
- A driver should alert the system when they've picked up the package
- A driver should alert the system when they've delivered the package

### Implementation Details and Requirements

Create 3 separate services that can run independently on any machine

### CAPS Application Server

- Starts a socket.io server on a designated port
- Creates a namespace called `csps`
- Within the namespace:
  - Monitor the 'join' event.
    - Each vender will have their own "room" so that they only get their own delivery notifications
  - Monitor the correct general events
    - `pickup`, `in-transit`, `delivered`
    - Broadcast the events and payload back out to all connected clients in the `csps` namespace
      - `pickup` can go out to all sockets (broadcast it)
      - `in-transit` and `delivered` are meant to be heard only by the right vendor
        - Broadcast those messages and payload only to the room (vendor) for which the message was intended

### Vendor Application

- Use the store code `1-206-flowers`
- Connects to the CAPS server as a socket.io client to the `csps` namespace
- Join a `room` for your store
  - Emit a `join` event, with the payload being your store code
- Every .5 seconds, simulate a new customer order
  - Create a payload object with your store name, order id, customer name, address
    - HINT: Have some fun by using the [faker](https://www.npmjs.com/package/faker) library to make up phony information
  - Emit that message to the CAPS server with an event called `pickup`
- Listen for the `delivered` event coming in from the CAPS server
  - Log "thank you for delivering `payload.id`" to the console

### Driver Application

- Connects to the CAPS server as a socket.io client to the `csps` namespace
- Listen for the `pickup` event coming in from the CAPS server
  - **Simulate picking up the package**
    - Wait 1.5 seconds
    - Log "picking up `payload.id`" to the console
    - emit an `in-transit` event to the CAPS server with the payload
  - **Simulate delivering the package**
    - Wait 3 seconds
    - emit a `delivered` event to the CAPS server with the payload

When running, the vendor and driver consoles should show their own logs. Additionally, the CAPS server should be logging everything.  Your console output should look something like this:

<img src="lab-17-output.png" width="600">

### Notes

- You will need to run all 3 servers. Clients will automatically re-connect to the server if it restarts (socket.io magic!)

1. `csps` - needs to be up so that it can accept and re-emit events
1. `vendor` - needs to have a running server to connect to, so that it can hear events
1. `driver` to run and have the server hear your events

### Visual Validation

Open this Web Application: <https://5ctmj.csb.app/>

It will connect to the socket.io server URL you specify using the vendor code `1-206-flowers`

If your sever, vendor and driver apps are all running according to the instructions, this application will show the full supply chain in real time.

### Stretch Goal

Instead of simply having the Vendor application send messages every 5 seconds (in fact, turn that vendor application OFF!), write a separate app using express, with a single route: POST `/pickup` that accepts an object that looks like the object you are currently creating in the vendor application.

```javascript
{
  "store": "1-206-flowers",
  "orderID": "65c17431-d1f5-432c-890f-d81788e38c1c",
  "customer": "Juston Reichel",
  "address": "Lake Al, OK"
 }}
```

When that route is hit, have the express server fire the event to the socket server with the `pickup` event with that object payload. This should kick off the same series of events that the `setInterval()` was doing in the vendor application, but using a web browser instead of automation to do each one

Assuming your small api server runs on port 3001, the form in the test app will hit that route if you have done this step

### Testing

- Write tests around all of your units
- Test event handler function (not event triggers themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
