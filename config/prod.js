module.exports = {
  googleProjectID: process.env.GOOGLE_PROJECT_ID,
  dialogFlowSessionID: process.env.DIALOG_FLOW_SESSION_ID,
  dialogFlowSessionLanguageCode: process.env.DIALOG_FLOW_LANGUAGE_CODE,
  googleClientEmail: JSON.parse(process.env.GOOGLE_CLIENT_EMAIL),
  googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
};