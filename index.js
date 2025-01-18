const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'index.html'));
})

app.get("/brasil-teve-aumento-de-38mil-de-assassinatos", (req, res) => {
    
})

app.listen(3000, () => {
    console.log("✔ Iniciado com sucesso na porta 3000")
})