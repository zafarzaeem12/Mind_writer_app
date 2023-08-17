// https://xd.adobe.com/view/c3be9d6f-ffc1-46b0-bd72-89dc68298978-96ed/grid

const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const databaseConnection = require('./database/databaseConnection')


// app routes start here
const User_Router = require('./router/Users')
// const Admin_Router = require('./router/Admin')
// app routes end here

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(cors());

// app routes usage start here
app.use("/api/", User_Router);
// app.use("/adminApi/", Admin_Router);
// app routes usage end here

dotenv.config();

const port = process.env.PORT;

// database connection start here
databaseConnection()
// database connection end here

app.listen(port, () => {
  console.log(`Server is running on ${port} Port`);
});