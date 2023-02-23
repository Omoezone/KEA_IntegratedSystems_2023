import express from "express"

const app = express()

//Outbound
app.get("/nodeXml", (req, res) => {
    res.send("welcome to node env")
})

app.get("/nodeTxt", (req, res) => {
    console.log("you have entered Date endpoint")
    res.send(new Date());
})

app.get("/nodeYaml", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

app.get("/nodeCsv", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

app.get("/nodeJson", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

//request from python server
app.get("/fromPythonXml", (req, res) => {
    res.send("welcome to node env")
})

app.get("/fromPythonTxt", (req, res) => {
    console.log("you have entered Date endpoint")
    res.send(new Date());
})

app.get("/fromPythonYaml", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

app.get("/fromPythonCsv", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

app.get("/fromPythonJson", async (req,res) => {
    await fetch('http://127.0.0.1:8000/date')
    .then((resp) => resp.json())
    .then((data) => res.send(data));
})

const PORT = 8080
app.listen(PORT, () =>console.log("Port open on: ", PORT))