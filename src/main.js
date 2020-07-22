import cors from 'cors';
import express from 'express';

const app = express();

const port = process.env.PORT || 8080;

export default port;

import bppkg from 'body-parser';

const { json, urlencoded } = bppkg;

import path from 'path';
const __dirname = path.resolve();

app.use(cors());
app.use(cors());
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/', (req, res) => {

    let plot = 'new-pop-vs-total-case';

    res.sendFile(`./src/${plot}.html`, { root: __dirname });

})

