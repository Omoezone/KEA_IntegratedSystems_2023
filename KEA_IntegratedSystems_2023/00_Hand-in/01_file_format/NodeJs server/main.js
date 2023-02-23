const fs = require("fs");
const yaml = require('js-yaml');
const csv = require('csv-parser');
var convert = require('xml-js');


function csvHandler(){ //Prop change
    const results = [];

fs.createReadStream("./files/me.csv")
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
}; 
csvHandler();

function txtHandler(){ //DONE
    fs.readFile("./files/me.txt", "utf-8", (err,txt)=> {
        txt = txt.split("\r\n");
        console.log(txt);
    })
}
//txtHandler()
//DONE EVT lav om til normalt object
function xmlHandler(){
    fs.readFile("./files/me.xml", "utf-8", (err, xml) => {
        xml = convert.xml2json(xml, {compact: true, spaces: 4});
        JSON.stringify(xml);
        console.log(xml);
    });
}
//xmlHandler()
function jsonHandler(){//DONE
    fs.readFile("./files/me.json","utf-8",(err,json) =>{
        json = JSON.parse(json);
        console.log(json)
    });
}
//jsonHandler()
function yamlHandler(){//DONE
    const data = yaml.load(fs.readFileSync('./files/me.yaml', 'utf8'));
    console.log(data)
}
//yamlHandler()