"use strict";

const dialogflow = require("dialogflow");
const { struct } = require("pb-util");
const nonGoogleConfig = require("../config/keys");
const config = require("../google-credentials.json");

const projectId = config.project_id;

const credentials = {
  client_email: config.client_email,
  private_key: config.private_key,
};

const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });
//handling the dialogflow implementation
module.exports = {
  textQuery: async function (text, userID, parameters = {}) {
    //bringing in the handleAction() method to be called before initialization
    //'self' is the module we are working in
    let self = module.exports;
    let sessionPath = sessionClient.sessionPath(
      nonGoogleConfig.googleProjectID,
      nonGoogleConfig.dialogFlowSessionID + userID.userID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: nonGoogleConfig.dialogFlowSessionLanguageCode,
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
    console.log(sessionPath);
    return responses;
  },

  eventQuery: async function (event, userID, parameters = {}) {
    //bringing in the handleAction() method to be called before initialization
    //'self' is the module we are working in
    let self = module.exports;
    let sessionPath = sessionClient.sessionPath(
      nonGoogleConfig.googleProjectID,
      nonGoogleConfig.dialogFlowSessionID + userID.userID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: struct.encode(parameters),
          languageCode: nonGoogleConfig.dialogFlowSessionLanguageCode,
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
