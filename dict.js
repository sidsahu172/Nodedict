
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

//for similarity
var sim=require('similarity')
var simword=[];
function suggest(x){
  for(i in jsonContent){
    if(sim(i,x)>0.6){
          simword.push(i)
}
}
console.log("Did you mean any of these: "+simword);
}

function dict(){
  prompts.question("Enter the word: ", function (a) {

    if(a in jsonContent){
      console.log(jsonContent[a]);
      process.exit();
    }
    else {
  suggest(a)
  dict()
      }
  });
 }
dict()
