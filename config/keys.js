//determining which config file to access depending on
//whether in production or develepoment
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
