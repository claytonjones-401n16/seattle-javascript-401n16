# LAB - Application State with Redux

For this assignment, you will be starting the process of creating an e-Commerce storefront

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Open [Code Sandbox](http://codesandbox.io) and Create a new application titled with your course code and this lab number (i.e. js-401n15-class-10)

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment: E-Commerce Application

Write a React application that will serve as the online store for a fictional company

For this assignment, we'll be using Redux to manage a list of categories and products

### Requirements

- Design your application with a header, main section, and a footer
  - The overall styling is up to you
- Display a list of categories
- When the user selects (clicks on) a category ...
  - Identify that category as selected
  - Show a list of products associated with the category

### Implementation Notes/Details

- Manage state in a Redux store
- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger the reducer to filter the product list when the active category is changed
    - HINT: Different reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category

- Create 2 components
  - `<Categories />`
    - Shows a list of all categories
    - Dispatches an action when one is clicked to "activate" it
  - `<Products />`
    - Displays a list of products associated with the selected category

### Testing

- Tests are not required for this assignment

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
