# LAB: Event Driven Applications

Create an event driven application that "distributes" the responsibility for logging to separate modules, using only events to trigger logging based on activity.

We're going to build an application for a company called **CAPS** - The Code Academy Parcel Service

**CAPS** will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when delivered, be notified that their customers received what they purchased.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

The application must:

- Simulate the order and delivery of an item from a vendor to a customer
- The vendor should alert the system of a package to be delivered
- A driver should alert the system when they've picked up the package
- A driver should alert the system when they've delivered the package

### Implementation Details and Requirements

Create the CAPS system as follows:

- `events.js` - Global Event Pool (shared by all modules)
- `caps.js` - Main Hub Application
  - Logs every event to the console with a timestamp and the event payload
- `vendor.js` - Vendor Module
  - Every 5 seconds, simulate a new customer order
    - Emit a 'pickup' event
    - Payload should be an object with your store name, order id, customer name, address
      - HINT: Have some fun by using the [faker](https://www.npmjs.com/package/faker) library to make up phony information
  - Whenever the 'delivered' event occurs
    - Log "thank you" to the console
- `driver.js` - Drivers Module
  - On the 'pickup' event ...
    - Wait 1 second
      - Log "picked up" to the console.
      - Emit an 'in-transit' event with the payload
    - Wait 3 seconds
      - Log "delivered" to the console
      - Emit a 'delivered' event with the payload

When running, your console output should look something like this:

```javascript
EVENT { event: 'pickup',
  time: 2020-03-06T18:27:17.732Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
EVENT { event: 'in-transit',
  time: 2020-03-06T18:27:18.738Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0
VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0
EVENT { event: 'delivered',
  time: 2020-03-06T18:27:20.736Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
...
```

### Testing

- Write tests around all of your units
- Test event handler function (not event triggers themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
