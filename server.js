const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const session = require('express-session')

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });