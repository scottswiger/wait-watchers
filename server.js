const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const session = require('express-session');
const hbs = exphbs.create({});
const Handlebars = require("handlebars");
 
// Set up sessions for log-ins
// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

// app.use(session(sess));

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});