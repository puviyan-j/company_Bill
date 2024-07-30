const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors= require('cors');
const router = require("./router/userrouter/userrouter")

app.use(express.json());
app.use(cors());
app.use("/api",router)


app.listen(5000, () => {
    console.log("sever connect")
})