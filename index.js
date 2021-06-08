//import required modules
const express = require('express')


//initialize the app
const app = express()

//setting the port to be used
const port = 5000


//route handling
app.get('/',(req,res) => {
    res.send("Successful send")
})



//set the port for the app to listen
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
 