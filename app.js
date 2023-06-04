const express = require('express');
const exphbs = require('express-handlebars');
//const bodyParser = require('body-parser'); // No longer Required
//const mysql = require('mysql'); // Not required -> moved to userController

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


const routes = require('./server/routes');
const {activiyRouter, dietRouter, userRouter, infoRouter,diaryRouter, personalRouter, recordRouter, mypageRouter} =routes;
app.use('/user', userRouter);
app.use('/diet', dietRouter);
app.use('/activity', activiyRouter);
app.use('/diary', diaryRouter);
app.use('/personal', personalRouter);
app.use('/record', recordRouter);
app.use('/top', mypageRouter);
app.use('/', infoRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));