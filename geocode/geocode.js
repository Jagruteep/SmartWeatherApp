const request = require('request');


var geocodeAddress = (address) => {

    //var encodedCity = encodeURIComponent(address);
    //console.log(address);



    request({
        url: `https://weather.api.here.com/weather/1.0/report.json?app_id=cjsCWbK4dJXUdbvtd9Es&app_code=2KeXkVH1GqjQh81HZqjFtw&product=observation&name=${address}`,
        json: true
    }, (error, response, body)=>{
        if(error){
            console.log('Unable to connect to the server');
        }else{
            //console.log(body);
            console.log(`Country : ${body.observations.location[0].observation[0].country}`);
            console.log(`State : ${body.observations.location[0].observation[0].state}`);
            console.log(`City : ${body.observations.location[0].observation[0].city}`);
            console.log(`Temperature : ${body.observations.location[0].observation[0].temperature}`);
            console.log(`Description : ${body.observations.location[0].observation[0].description}`);
            console.log(`Latitude : ${body.observations.location[0].latitude}`);
            console.log(`Longitude : ${body.observations.location[0].longitude}`);
            }
      }
    );

};

module.exports = {geocodeAddress};