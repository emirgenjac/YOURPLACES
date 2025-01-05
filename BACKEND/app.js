const express = require('express');
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const HttpError = require('./models/http-error')


const app = express();

app.use(bodyParser.json())

app.use('/api/users', usersRoutes)
app.use('/api/places', placesRoutes)


app.use((req, res, next) => {
    const error = new HttpError("Could not reach this route", 404)
    throw error;
})

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occured"})
})


app.listen(port = 5000, () => {
    console.log(`Server started on port ${port}`);
    
});