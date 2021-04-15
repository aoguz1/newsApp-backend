
import express from 'express';

import NewsController from '../controller/NewsController';

const app = express();

app.get('/', NewsController.getNews);
app.post('/', NewsController.postNews);

module.exports = app;