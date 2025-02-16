const express = require('express');
const app = express(); 



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const clientsController = require('./controllers/Client')
app.use("/clients/", clientsController)

const port = process.env.PORT || 5000

app.listen(port, () => { 
    console.log(`listening on ${port}`)
})