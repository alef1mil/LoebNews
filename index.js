const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'index.html'));
})

app.get("/globais/noticias", (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'noticias.html'));
})

app.get("/globais/noticias/familha-com-membros-eleitos-em-2024-perderao-benefios-com-bolsa-familha", (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'not', "jklp.html"));
})

app.listen(3000, () => {
    console.log("✔ Iniciado com sucesso na porta 3000")
})
