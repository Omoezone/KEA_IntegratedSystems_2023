const fs = require("fs");
const yaml = require('js-yaml');
const csv = require('csv-parser');
var convert = require('xml-js');

// Jeg har her lavet de fleste om til JSON objekter
function csvHandler(){ 
    const res = [];
    fs.createReadStream("./files/me.csv")
    .pipe(csv())
    .on('data', (data) => res.push(data))
    .on('end', () => {
        const rest = res[0]
        console.log("CSV output: ", rest);
    });
}; 
function txtHandler(){ 
    fs.readFile("./files/me.txt", "utf-8", (err,txt)=> {
        txt = txt.split("\r\n");
        console.log("TXT output: ",txt);
    })
}

function xmlHandler(){
    fs.readFile("./files/me.xml", "utf-8", (err, xml) => {
        xml = convert.xml2json(xml, {compact: true, spaces: 4});
        JSON.stringify(xml);
        console.log("XML output: ",xml);
    });
}

function jsonHandler(){
    fs.readFile("./files/me.json","utf-8",(err,json) =>{
        json = JSON.parse(json);
        console.log("JSON output: ",json)
    });
}

function yamlHandler(){
    const data = yaml.load(fs.readFileSync('./files/me.yaml', 'utf8'));
    console.log("YAML output: ",data)
}

// Handlers
csvHandler();
txtHandler();
xmlHandler();
jsonHandler();
yamlHandler();