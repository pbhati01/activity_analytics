## Activity Analytics Project

### This application inclueds following features:

* A Button to capture current seconds on click. a GitHub repository for analysis (i.e., owner and repository name)
* Every time the button is pressed, the current seconds are extracted. For example, if the time is "11:20:55", "55" is extracted.
* Click on a button should send POST request to https://jsonplaceholder.typicode.com/posts with the body {"seconds": "55"}, if "55" was the extracted number of seconds.
* Extract “id” from JSON response and “seconds” from request and log them into console (something like “id: 100, second: 58”).

### The following are our requirement for the solution:

1. Mandatory syntax is ES6 with optional static type checking (TypeScript or Flow)
1. Only one request can be sent at a time (synchronous and in order of happening).
1. No external libraries should be used, only vanilla JavaScript (ES6 syntax)
1. Only requests with different "seconds" values should be sent and logged. Otherwise log warning for repeated seconds. This means that during the entire app lifetime, at most 60 requests (for seconds value from 0 to 59) can be tracked.
1. Guarantee that requests are sent only when tab is active, and make sure that pending requests initiated after tab became inactive are sent after the tab becomes active again


## Steps to setup application in local

##### `Client Server Setup for React`
* Go to Root directory of application and execute following commands:
    ```sh
    $ cd activity_analytics
    $ activity_analytics> npm install
    $ activity_analytics> npm start
    ```
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />