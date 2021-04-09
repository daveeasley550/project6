# Starwars people API

starwars people api from the https://www.swapi.tech/api/people/

## Installation

https://polar-lake-62924.herokuapp.com/peoples

## Usage
i assume it is for the next project



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
i dont have one, i got warrants!!!


//CRUD Star Wars API
this project is a cloud based API with full CRUD functionality. You can find and edit information about some of your favorite Star wars characters on this API. Technologies used include Javascript, Express, MongoDB, Mongoose, & Heroku.

Usage
you can access the API from the CLI by using http requests.

GET, POST, PUT, and DELETE requests are all possible. the root directory is

https://polar-lake-62924.herokuapp.com/peoples
GET
for example, a get request would be made like this from the CLI

http get https://polar-lake-62924.herokuapp.com/peoples
the above get request to the root directory will return all characters in the API. By adding an ID number to the end of the root directory you can make a targeted GET request. Each character ID has an "_id" in their respective object in the API for this purpose. this type of request would look like this:

http get https://polar-lake-62924.herokuapp.com/peoples
PUT
For PUT requests you must use an ID on the end of the root directory. PUT requests must include information for updating the target object. The information to be updated can be added in key value pairs at the end of the request. The key value pairs should be written out as <key>=<value> Those requests would look as follows:

http put https://six2121.herokuapp.com/things/6054967274542d00157732ba name=bryanEmerson
the above request would change the name in the target object to bryanEmerson

DELETE
For Delete requests you must use an ID on the end of the root directory. Those requests would look as follows:

http delete https://six2121.herokuapp.com/things/6054967274542d00157732ba
the above request would delete the target object from the database.

POST
For Post requests you use the root directory and add your key value pairs at the end. The key value pairs should be written out as <key>=<value> Those requests would look as follows:

http post https://six2121.herokuapp.com/things/ uid=12 name=bryan url=www.google.com
the above request would create a new object in the API as follows:

{
    "__v": 0,
    "_id": "6054967274542d00157732ba",
    "name": "bryan",
    "uid": "12",
    "url": "www.google.com"
}
please note that the "__v" and "_id" key value pairs are generated automatically.

Contributing
If you are going to make changes, please open an issue first to discuss what you would like to change.

Happy Coding!