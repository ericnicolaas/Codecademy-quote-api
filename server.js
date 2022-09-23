const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const QuotesRouter = require('./quotes-router');

app.use(express.static('public'));

app.use('/api/quotes', QuotesRouter);

app.listen(PORT);