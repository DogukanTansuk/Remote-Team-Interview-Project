var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParse = require('body-parser');

// Middlewares
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
    });

var routes = require('./routes/apiRoutes');
routes(app);

app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found'})
    console.log('Bad attempt');
});

app.listen(port);

console.log('Api is running');