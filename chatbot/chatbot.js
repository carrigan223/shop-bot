"use strict";

const dialogflow = require("dialogflow");
const { struct } = require("pb-util");
const config = require("../config/keys");

const projectId = config.googleProjectID;

const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });

//handling the dialogflow implementation
module.exports = {
  textQuery: async function (text, parameters = {}) {
    //bringing in the handleAction() method to be called before initialization
    //'self' is the module we are working in
    let self = module.exports;
    const sessionPath = sessionClient.sessionPath(
      config.googleProjectID,
      config.dialogFlowSessionID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: config.dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: parameters,
        },
      },
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  eventQuery: async function (event, parameters = {}) {
    //bringing in the handleAction() method to be called before initialization
    //'self' is the module we are working in
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: struct.encode(parameters),
          languageCode: config.dialogFlowSessionLanguageCode,
        },
      },
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  handleAction: function (responses) {
    return responses;
  },
};
