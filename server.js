const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const session = require('express-session');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
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

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
sequelize.sync({force : false}).then(() => {
    app.listen(PORT, () => {
        console.log('Server listening on: http://localhost:' + PORT);
});

}).catch(err => console.log(error));