# Sprint 7 Module 4 Project

## Introduction

Welcome to Module 4 Project! In this project, you will practice testing functions and components with Jest and React Testing Library.

To successfully complete this project, you will need the following technical knowledge:

1. **Core JavaScript** to manipulate data.
2. **Jest** to unit-test functions.
3. **React Testing Library** (RTL) to test React components.

## Instructions

**Here is an overview of the tasks you will complete:**

1. You will write integration tests with React Testing Library to check that a form written in React includes the required pieces of text.

2. You will make the form support limited internationalization (i18n) by allowing the user of the app to toggle between English and Spanish.

3. You will write further integration tests to test the multi-language feature of the form.

4. You will write an auxiliary helper function and unit-test it.

### 💾 Setup

**Here are the steps to set up this project:**

1. Clone this repository to your computer.

2. Within your terminal, navigate to the project folder and execute `npm install`.

3. After successful installation execute `npm run dev` and, in a different terminal, `npm test`.

4. You will load the app in Chrome by navigating the browser to `http://localhost:3003`.

**❗ Note:** On the event of NPM errors during setup, delete the `node_modules` folder and the `package-lock.json` file, and retry `npm i` and `npm run dev`.

### 🥷 Tasks

**Here are some files of interest you will need to complete your tasks:**

1. Inside a [JSON document](./frontend/i18n/index.json) you will find an object in JSON format.
    - The object contains the visible **texts** of headings and buttons, and also input **labels** and input **placeholders**.
    - The object **can be imported** into other modules. The `import` statement will even take care of parsing the JSON for you!

2. Inside the [App.js module](./frontend/components/App.js) you will find the form that renders in Chrome.

3. Inside the [App.test.js module](./frontend/components/App.test.js) is where you will write unit and integration tests.

Have fun with the tasks, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Write RTL tests for the English language

1. Start by "eyeballing" that the visible English texts that render in Chrome match the "en" texts found in the JSON file.

2. Inside the App test file, use React Testing Library to test that all the English shows correctly:
    - Use `screen.getByText` to check that the various texts are visible.
    - Use `screen.getByPlaceholderText` to check that the placeholder texts are visible.
    - Use `screen.getByLabelText` to check that the input labels are visible.

3. An example test is written for your benefit. Note that the test is using hard-coded text instead of benefitting from the data found inside the JSON. This is workable but not very maintainable: changes in the JSON made by the UX expert in your team will not propagate to the tests. It's recommended that you import the JSON into the test file and use it as the source of truth!

4. Complete 13 passing tests, corresponding to the "en" keys inside the JSON.

#### 👉 TASK 2 - Implement Internationalization

Improve the App component so the user can toggle the UI between Spanish and English. The component receives a `lang` prop that defaults to "en". This is used to initialize a state that controls which language is used. This state can be toggled by clicking on the little flag, but all headings, buttons, placeholders and labels are using hard-coded text in English right now.

1. Import the JSON file into the App component, and use it to extract the correct bits of text depending on the `language` component state.

2. Edit the JSX of the component to use the correct texts, labels and placeholders, depending on the `language` state.

3. At the end of your task, the form should switch correctly between Spanish and English!

4. After you are done, check that the tests you wrote for the English language are passing, and didn't break over the course of Task 2.

❗ Having tests to back you up is extremely useful whenever performing major surgery inside a component like we are doing in this task!

#### 👉 TASK 3 - Write RTL tests for the Spanish language

1. Inside the App test file, use React Testing Library to test that all the Spanish shows correctly, following the pattern used in Task 1.

2. At this point, if you are not importing the JSON inside the test file, you should do it now.

3. Complete 13 passing tests, corresponding to the "esp" keys inside the JSON.

❗ The JSON should be the source of truth for both the tests and the UI at this point. A non-technical person can easily maintain the JSON file, and little edits done to the visible texts inside this document will propagate to the component and the tests, for improved maintainability. Try this out by editing some texts in the JSON yourself, and see the changes carry over to Chrome, while the tests still pass.

#### 👉 TASK 4 - Write a helper function and unit-test it with Jest

1. Inside the test file, implement the `getEntriesByKeyPrefix` function as per the instructions found in the file.

2. Use Jest to test the function as per the instructions found in the file.

3. Refactor your tests to use the helper function! (Optional step.)

❗ Watch the end of the solution video of this project, to learn how to make your tests DRYer and more dynamic.

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>I am getting errors when I run npm install. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Sometimes Node can be installed but misconfigured. Try deleting `node_modules` and running `npm install`. If that fails, try deleting both `node_modules` and `package-lock.json` before reinstalling. If all fails, please request support!

</details>

<details>
  <summary>Do I need to install extra libraries with NPM?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

With React, it's very important that we use the React Dev Tools to monitor the state of our components as we interact with the App. If the state is not adjusting like it should, that's good to know. If the state does change but the UI does not respond, that's a different thing.

If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do. Comment out chunks of code until you get it to compile!

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Run `npm test` to execute all test files in the project.

</details>
