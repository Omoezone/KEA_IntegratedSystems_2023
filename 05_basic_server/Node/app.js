import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send({message: "FRONT PAGE"})
});

app.get("/newroute", (req,res) =>{
    res.send({message:"Second page"})
})
app.listen(8080, () => console.log("Server is running on port ", 8080));