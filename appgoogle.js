

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .argv;
 
geocode.geocodeAdddress(argv.address, (errorMsg, result)=>{
    if(errorMsg){
        console.log(errorMsg);
    }else{
        console.log(result)
    }
})
