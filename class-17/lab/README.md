# LAB: TCP Server / Message Application

Create an multi-server, event driven application that uses only events transmitted over a network to trigger logging based on activity.

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

### CSPS Application Server

- Accepts inbound TCP connections on a port
- Creates a pool of connected clients
- On incoming data from a client
  - Verify that the data is legitimate
    - Is it JSON?
    - Does it have an `event` and `payload` property?
  - Broadcast the raw data back out to all connected clients

### Vendor Application

- Connects to the CSPS server
- Every 5 seconds, simulate a new customer order
  - Create a payload object with your store name, order id, customer name, address
    - HINT: Have some fun by using the [faker](https://www.npmjs.com/package/faker) library to make up phony information
  - Create a message object with the following keys:
    - `event` - 'pickup'
    - `payload` - the payload object you created in the above step
  - Write that message (as a string) to the CSPS server
- Listen for the `data` event coming in from the CSPS server
  - When data arrives, parse it (it should be JSON) and look for the `event` property
  - If the event is called `delivered`
    - Log "thank you for delivering `id`" to the console
  - Ignore any data that specifies a different event

### Driver Application

- Connects to the CSPS server
- Listen for the `data` event coming in from the CSPS server
  - When data arrives, parse it (it should be JSON) and look for the `event` property and begin processing...
  - If the event is called `pickup`
    - **Simulate picking up the package**
      - Wait 1 second
      - Log "picking up `id`" to the console
      - Create a message object with the following keys:
        - `event` - 'in-transit'
        - `payload` - the payload from the data object you just received
      - Write that message (as a string) to the CSPS server
    - **Simulate delivering the package**
      - Wait 3 seconds
      - Create a message object with the following keys:
        - `event` - 'delivered'
        - `payload` - the payload from the data object you just received
      - Write that message (as a string) to the CSPS server

When running, the vendor and driver consoles should show their own logs. Additionally, the CSPS server should be logging everything.  Your console output should look something like this:

<img src="lab-17-output.png" width="600">

### Notes

- You will need to start your servers up in the right order so that you can visually test things out.

1. `csps` - needs to be up so that it can accept and re-emit events
1. `vendor` - needs to have a running server to connect to, so that it can hear events
1. `driver` to run and have the server hear your events

### Testing

- Write tests around all of your units
- Test event handler function (not event triggers themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
