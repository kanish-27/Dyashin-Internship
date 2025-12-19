const fs = require("fs");
const path = require("path");

const action = process.argv[2];   

const folderPath = path.join(__dirname, "async");
const filePath = path.join(folderPath, "data.txt");

switch (action) {

  case "create":
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      } else {
        fs.writeFile(filePath, "Hello, this is a new file", (err) => {
          if (err){
            console.error(err);
          }
          else{
            console.log("File created successfully");
          }
        });
      }
    });
    break;

  case "read":
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err){
        console.error("File not found");
      }
      else{
        console.log("File Content:", data);
      }
    });
    break;

  case "update":
    fs.appendFile(filePath, "\nThis is updated content", (err) => {
      if (err){
        console.error("File not found");
      }
      else{
        console.log("File updated successfully");
      }
    });
    break;

  case "delete":
    fs.unlink(filePath, (err) => {
      if (err){
        console.error("File not found");
      }
      else{
        console.log("File deleted successfully");
      }
    });
    break;

  default:
    console.log("Invalid command");
    console.log("Use: create | read | update | delete");
}
