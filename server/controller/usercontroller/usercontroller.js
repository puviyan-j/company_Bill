const express = require("express");
const mongoose = require("mongoose");

const loginitem = {
    email: "puviyan",
    password: "mech1995"
}
const company = {
    companyName: 'puviyan',
    doorNo: '1/77',
    street: 'sembarai pudur',
    address: '',
    dist: 'namakkal',
    state: 'tamil nadu',
    country: 'india',
    pincode: '637003',
    gstin: 'li8p8gs858timjm',
    email: 'puviyanj95@gmail.com',
    phone: '9042258411',
}
const costemer = [{ name: "puviyan" }, { name: "ranjith" }, { name: "ramkumar" }]

const signup = async (req, res) => {
    console.log(req.body)
    res.send(req.body)
}
const login = async (req, res) => {
    try {
        const { names, password } = req.body
        if (names !== loginitem.email || password !== loginitem.password) {
            return res.status(400).send("not valid")
        }
        res.send(company)

    } catch (error) {
        res.status(400).send("not valid")
    }

}

const reciver = (req,res)=>{
    const q = req.body.q;
    const fill = costemer.filter((r)=>{
       return r.name.includes(q)
    })
    res.send(fill)
}

module.exports = { signup, login ,reciver}