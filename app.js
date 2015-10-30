var Express = require('express'),
    nconf   = require('nconf'),
    Twit    = require('twit'),
    cors    = require('cors');

nconf.file('settings.json').env();

var app = Express(),
    port = nconf.get('express:port') || 8080;
    twit = new Twit({
        consumer_key: nconf.get('twitter:consumer_key'),
        consumer_secret: nconf.get('twitter:consumer_secret'),
        access_token: nconf.get('twitter:access_token'),
        access_token_secret: nconf.get('twitter:access_token_secret')
    });

app.use(cors())

app.get('/', function (req, res) {
    res.header({ 'Content-Type': "application/json"})
        .send({ msg: 'Hello', version: "0.1.0" });
});

app.get('/search/:query', function (req, res)  {
    console.log(req.params);
    console.log(req.query);

    var query = req.params.query || '',
        count = req.query.count || 10;

    twit.get('search/tweets', { q: query, count: count }, function (err, data) {
        res.header({ 'Content-Type' : "application/json" })
            .send((err) ? err : data);
    });
});

app.listen(port, function () {
    console.log("Listening on http://127.0.0.1:" + port);
});

