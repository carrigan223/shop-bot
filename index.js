//import required modules
const express = require("express");

//initialize the app
const app = express();

//using express native package to parse JSON
app.use(express.json());

require("./routes/dialogflowRoutes")(app);

//setting the port to be used
//specified by .env otherwise default to
//port 5000 for local
const PORT = process.env.PORT || 5000;

//set the port for the app to listen
app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
