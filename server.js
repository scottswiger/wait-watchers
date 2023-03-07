const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({ helpers });
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');

// Set up sessions for log-ins
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers');

// TODO: Describe what the following two lines of code are doing.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/blog-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});