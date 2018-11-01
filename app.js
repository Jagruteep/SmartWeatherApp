const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            describe: 'City name to fetch weather for',
            //string: true
        }
    })
    .argv;

   geocode.geocodeAddress(argv.a); 