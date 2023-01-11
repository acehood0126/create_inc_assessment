<h1 align="center"></h1>

# Prerequisites

- [NodeJS](https://nodejs.org/en/) (use nvm to manage versions)
- [NPM](https://www.npmjs.com/get-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## Editor Setup
- [ESLint/Prettier](https://eslint.org/docs/user-guide/integrations#editors)

# Instructions

## Overview

This is an project to assess engineers for the Create, Inc. freelance marketplace platform. We appreciate you taking the time to participate.

This is a timed exercise. We expect this to take one hour, however you have up to 2 hours after cloning the repo to push code up. The timer begins as soon as you clone this repo. You should make your changes in a separate branch off of `main` and open a pull request into `main` with your changes when you are done. We will only consider code pushed up within the alloted time. Speed of completion will be considered when evaluating the exercise, but quality should not be sacrificed.

If you would like to familiarize yourself with the existing code, please read through it on Github. This does not count towards your allotted time.

## Task

You are responsible for creating a simple shopping website. For simplicity, this is a frontend-only application, written in Typescript. Because we want to assess basic implementation skills, there is a folder in `src/mock-backend` that includes a react hook where you should implement the main logic for the shopping cart.

### Frontend

In `src/pages/index.tsx`, you should implement the UI for displaying the `items` that are for sale, which are provided to you via the `useCheckout` react hook.

The client has specified the following UI requirements:

- Each product should be shown on the home page, with their name and price
- If an item is out of stock (`quantity = 0`) it should still be listed and show it is out of stock and should be at the bottom of the list.
- You should be able to buy any of the products via a `Buy` button that is listed alongside each product. Clicking this button should call the `buy` function provided from the `useCheckout react hook.
- The backend will throw errors when the user has insufficient balance to buy an item. In that case, you should show this error to the user. Only one error should be shown on the page at a time.
- Bonus: While the buy request is running, inform the user.

#### Styling
This does not need to be a beautifully styled app. The focus is on the other aspects of the implementation. That said, feel free to use css, scss, or tailwind (whatever you're most comfortable with) in this setup to style the frontend.  

### Mock Backend

The mock backend is implemented inside `src/mock-backend/index.ts`. You are responsible for ensuring it responds to the `buy` function calls from the Frontend utiilizing the `executePurchase` function imported from `src/mock-backend/purchase.ts`. The `executePurchase` function should take the following into account:

- If the user has the required balance to buy the item, then the stock of the item should be reduced by one and the balnce of the user should decrease.
- If the user does not have the required balance or if the item is out of stock, then the proper error should be thrown.
- Bonus: Write a jest test in `src/mock-backend/__tests__/purchase.ts`.

NOTE: the buy function includes a `sleep` function call. This is included to mimic the behavior of an API. Please do not remove it.

### Running the App
This app runs on [Next.js](https://nextjs.org/), but the necessary scripts from this assignment are all available via yarn:

| Command     | Description                                                |
| ----------- | ---------------------------------------------------------- |
| `yarn dev`  | starts a development server for the app with hot reloading |
| `yarn test` | [BONUS] runs the tests                                     |

Once you run `yarn dev`, the app will be running at `localhost:3000`.

### Wrapping up

Once you are finished, open a pull request into the `main` branch from the branch with your changes and email `hello@create.xyz` (this routes to `dhruv@create.xyz` and `marcus@create.xyz`).

## Troubleshooting
If you run into any issues around getting the project setup, email or ping `dhruv@create.xyz` or `marcus@create.xyz`.

