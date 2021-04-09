let fetch = require("node-fetch")
let fs =require("fs").promises


// fetch(url)
//   .then(response=> response.json())
//   .then(data=> fs.writeFile("./people.json", JSON.stringify(data)))
//   .then(()=> console.log("Done!"))
//   //more like make a fn that would then go through and add the url data
//   .catch(error=> console.error(error))
  // "url": "https://www.swapi.tech/api/people/5"
  let peoplesArray = []
for(let i=1; i<11; i++){
  const url = `https://www.swapi.tech/api/people/${i}`
  fetch(url)
  .then(response=> response.json())
  .then(data=>peoplesArray.push(data) )
  .then(()=> fs.writeFile("./people.json", JSON.stringify(peoplesArray)))
  .catch(error=> console.error(error))
}
