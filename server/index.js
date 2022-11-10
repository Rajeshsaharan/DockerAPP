const express = require('express');
const app = express()
app.use(express.json())


//cors//
const cors = require('cors')
app.use(cors())


app.get("/api/user", (request, response)=>{
    return response.send({"user" : "my username is rajesh"})
})

app.listen(5000)