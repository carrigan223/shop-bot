# About this project

    This project is a chatbot built using React framework for the front end, 
    with node JS to handle our backend API calls and webhooks, 
    the language parsing is taken care of using services from google dialogflow

## Cloning this project 

    When cloning this project from GIT, the shop-bot folder as a route contains the index.js entry.
    point for node and Node modules relating to express. The shop-bot front end folder will hold the 
    react code pertaining to the client side. Both folders should contain package.json and a directory containing 
    the need node modules to run the package. Also to run this project in the config file the .env variables must be 
    set with your credentials. *name this file dev.js it will be included in git ignore.

   ## example config export:

    module.exports = {
        googleProjectID: "YOUR PROJECT ID",
        dialogFlowSessionID: "YOUR SESSION ID",
        dialogFlowSessionLanguageCode: "en-us",
        googlePrivateKey:
            "YOUR GOOGLE PRIVATE KEY",
        googleClientEmail: "YOUR GOOGLE CLIENT EMAIL",
    };

#### IMPORTANT

    In your root folder you must also contain your generated google-credentials.json file. 
    DO NOT COMIT THIS FILE.
    MAKE SURE TO INCLUDE IN YOUR .GITIGNORE AND NOT PUSH TO PUBLIC REPOS
    [Learn more about generating your google service account credetials](https://cloud.google.com/docs/authentication/getting-started)


## Commands to run the project

### npm install or yarn install 
    Must be run in root shop-bot and again in shop-bot-front-end

