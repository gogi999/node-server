import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import router from './router';

const PORT = 5000;

const app = express();
router(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());

app.listen(PORT, (error) => {
    if (error) return console.log(error);
    console.log(`Server is listening on port ${PORT}...`);
});
