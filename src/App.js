var express = require('express')
//import Routes from './Routes/Tests.routes'
var Routes = require('./Routes/Api.routes')
var testRoutes = require('./Routes/Tests.routes')
var cors = require('cors')
var  bodyparser = require('body-parser')
const authRoutes = require('./Routes/auth')
const verifyToken = require('./Routes/validate')

require('dotenv').config();

// export routes

const app = express()


// server port 
app.set('port', process.env.PORT || 3000)

//app.use(express.json())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//cors
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// initial route
app.get("/", (req, res) => {
    res.send('Api Tuthor')
})

// config export routes
app.use("/", authRoutes);
app.use("/Api", verifyToken, Routes)
//app.use("/Api", Routes)

app.use("/Api/tests", testRoutes)

app.use((req, res, next) => {
    console.info("Udefined route")
    //res.send("Undefined route")
})

module.exports = app;