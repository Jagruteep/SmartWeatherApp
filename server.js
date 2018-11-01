const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const request = require('request');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})
  

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `https://weather.api.here.com/weather/1.0/report.json?app_id=cjsCWbK4dJXUdbvtd9Es&app_code=2KeXkVH1GqjQh81HZqjFtw&product=observation&name=${city}`;
request(url, function (err, response, body) {
    if(err){
      res.render('index');
    } else {
        let weather = JSON.parse(body);
        let weatherOutput = `It's ${weather.observations.location[0].observation[0].temperature} degrees in ${city}!`;
        res.render('index', {weather : weatherOutput, error : null});
      }
    })
  });


app.listen(port, function () {
  console.log(`Weather app listening on port ${port}`);
});

