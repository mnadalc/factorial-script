# Automatic Factorial Scheluder

## What it does

Automatic add hours to factorial working days. Only runs until the current day. Made with Cypress.

## How to configure

Set your factorial's `username` and `password` at file

```
cypress/
  support/
    commands.js
```

inside `user` contant.

## First time running

You have to install Cypress and all their dev dependencies. Use the command

`$ yarn`

or

`$ npm install`

in order to install everything.

## Command run

Once you set your username/password and install all dependencies, run the command

`$ yarn cypress run` or `$ npm run cypress run` to run automatically.

If you want to see the process of how it's done, run the following command

`$ yarn cypress open` or `$ npm run cypress open` and click the test you want to run.
