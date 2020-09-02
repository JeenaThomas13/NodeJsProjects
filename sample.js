const fs = require("fs");

fs.writeFileSync("message.txt","hello there");
fs.appendFileSync("messa.txt","there");
fs.appendFileSync("messa.txt","hello");


