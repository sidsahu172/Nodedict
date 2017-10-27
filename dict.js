
//Reading the json file
var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("data.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);


// Taking input from user
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Enter the word: ", function (a) {

  if(a in jsonContent){
    console.log(jsonContent[a]);
  }
  else {
    console.log("Try again with correct spelling");
  }

process.exit();
});
