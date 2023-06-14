const express = require('express');
const app = express();
const Tasks = require('./router/Tasks')
const connectDB = require('./db/connect');
require('dotenv').config()

//middleware
app.use(express.static('./public'));
app.use(express.json());


//routes
app.use('/api/v1/tasks', Tasks);


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening to port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}


start();



