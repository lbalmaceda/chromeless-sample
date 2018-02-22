[![CircleCI](https://circleci.com/gh/lbalmaceda/chromeless-sample/tree/master.svg?style=svg)](https://circleci.com/gh/lbalmaceda/chromeless-sample/tree/master)

# Chromeless On CircleCI

This project attempts to make a proof of concept of how [Chromeless](https://github.com/graphcool/chromeless) can run in a Dockerized environment like [CircleCI 2.0](https://circleci.com/docs/2.0/).


### How to Run Locally
A simple chromeless script is located in the `test.js` file. To run it locally, make sure you have NodeJS and the Chrome browser installed and run:

```sh
npm i
node test.js
```

The browser will open and an image file with the screenshot should be created under the `out` folder of the project root.


### How to Run on CircleCI

