# LAB - Redux - Asynchronous Actions

For this assignment, you will be continuing your work on the e-Commerce storefront, retrieving and saving live data using a remote API, using Redux "thunk" to enable asynchronous actions

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Open [Code Sandbox](http://codesandbox.io) and Create a new application titled with your course code and this lab number (i.e. js-401n15-class-10)

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment: E-Commerce Application

Write a React application that will serve as the online store for a fictional company

For this assignment, we'll be using Redux to manage a list of categories and products as well as a shopping cart.

### Requirements

> The requirements for this assignment are the same as for the previous, with the exception that you'll be pulling the category and product data from a live API.

- Design your application with a header, main section, and a footer
  - The overall styling is up to you
  - Add an "Items in Cart" indicator to the header, like this: **Cart (0)**
    - Or ... use your creativity to use an icon, count bubble, etc.
- Home Page Operation:
  - Display a list of categories
  - When the user selects (clicks on) a category ...
    - Identify that category as selected
    - Show a list of products associated with the category
    - The product listings should show the title, description, image, # in stock, and the price
    - If the number in stock > 0, also show an "add to cart" button
  - When a user clicks the "add to cart" button add the item to their cart
    - On the page, show a running list of the items in the cart (just the titles)
    - Change the `(0)` indicator in the header to show the actual number of items in the cart
    - Reduce the number in stock for that product

### Implementation Notes/Details

> Load the category and product list from a remote API on page load. Update the product stock when adding items to (or removing from) the cart
> Continue to use multiple reducers

- Categories
  - State should be a list of categories as well as the active one
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger the reducer to filter the product list when the active category is changed
    - HINT: Different reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
  - Create an action that will trigger the reducer to reduce the # in stock counter
    - This should perform an update of this product on the server using the API to keep the data accurate
  - Create a reducer that reduces the # in stock when that action is dispatched
    - This should use the information received from the server after the update from the action
- Cart
  - State should be an array of products that have been added (all product details)
  - Create an action that will trigger the reducer to add the selected item to the cart
    - **Hint:** this could be the same action type as you create for the Products reducer
  - Create a reducer that adds the product to the array of items in state

Page Operation

- Create the following components for the Home Page
  - `<Categories />`
    - Shows a list of all categories
    - Dispatches an action when one is clicked to "activate " it
  - `<Products />`
    - Displays a list of products associated with the selected category
  - `<SimpleCart />`
    - Displays a short list (title only) of products in the cart

### Stretch Goal

- Add a "Remove from Cart" button to each item in the cart
  - Change the indicator in the menu
  - Add 1 back to the # in stock for that product
    - Update the item on the serve as well

### Testing

- Tests are not required for this assignment

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
