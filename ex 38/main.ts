function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
//Invoking function with name of the City
describe_city("Karachi");

//Invoking function with different name of the City
describe_city("Lahore");

//Invoking function with different name and country of the City
describe_city("Madina","Saudi Arabia")