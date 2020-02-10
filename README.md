# Automatic Factorial Scheluder

## What it does

Automatic add hours to factorial working days. Only runs until the current day.

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

`$ yarn cypress run`

or

`$ npm run cypress run`
