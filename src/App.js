import e from 'express'
import express from 'express'
//import Routes from './Routes/Tests.routes'
import Routes from './Routes/Api.routes'

// export routes

const app = express()


// server port 
app.set('port', process.env.PORT || 3000)

app.use(express.json())

// initial route
app.get('/', (req, res) => {
    res.send('Api Tuthor')
})

// config export routes
app.use('/Api', Routes)
app.use((req, res, next) => {
    console.info("Udefined route")
    res.send("Undefined route")
})

export default app;