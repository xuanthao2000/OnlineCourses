import express from 'express';
import morgan from 'morgan';
import route from './routers/index.js';
import path from 'path';
import expressHbs from 'express-handlebars';

import db from './config/connectDB.js';
const app = express();
const port = 3000;
const __dirname = path.resolve();

db.connect();

// library
app.use(morgan('combined'));

//template engine
app.engine('hbs',expressHbs.engine({
    extname: '.hbs'
}));

app.set('view engine','hbs');
// Duong dan den view
app.set('views', path.join(__dirname,'src','views'));



route(app);


app.listen(port, () => console.log(`Listening at http://localhost:3000`));