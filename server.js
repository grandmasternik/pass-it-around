const express = require(`express`);
const app = express();

const port = 3000;

let beers = 99;
app.get(`/`, (req, res) => {
    res.send(`<h2> ${beers} bottles of beer on the wall</h2> <a href="/${beers}">take one down, pass it around</a>`)
});

app.get(`/:number_of_bottles`, (req, res) => {
    let numOfBeers = parseInt(req.params.number_of_bottles);
    if (numOfBeers > 0) {
        numOfBeers = numOfBeers - 1
        res.send(`<h2> ${numOfBeers} bottles of beer on the wall</h2> <a href="/${numOfBeers}" bottles of beer>take one down, pass it around</a>`)
    }
    else {
        res.send(`<h2>No more beers. </h2><a href="/">Play Again</a>`)
    }
});

app.listen(port, () => {
    console.log('Express is listening on port', port)
});