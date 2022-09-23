const express = require('express');
const router = express.Router();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

router.get('/', (req, res, next) => {
	if (req.query.person) {
		const filteredQuotes = quotes.filter(quote => quote.person.toLowerCase().includes(req.query.person.toLowerCase()))
		res.send({quotes: filteredQuotes});
	} else {
		res.send({quotes: quotes});
	}
});

router.get('/random', (req, res, next) => {
	const quote = getRandomElement(quotes);
	res.send({quote: quote});
});

router.post('/', (req, res, next) => {
	const {quote, person} = req.query;

	if (quote && person) {
		const newQuote = { quote, person };
		quotes.push(newQuote);
		res.send({quote: newQuote})
	} else {
		res.status(400).send();
	}
 });

module.exports = router;