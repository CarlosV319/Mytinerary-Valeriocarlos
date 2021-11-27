// import { Routes } from "react-router";

const cities = [
    {
      title: "Arabia Saudita",
      src: "./assets/ArabiaSaudita.jpg",
    },
  
    {
      title: "Grecia",
      src: "./assets/Grecia.jpg",
    },
  
    {
      title: "Indonesia",
      src: "./assets/Indonesia.jpg",
    },
  
    {
      title: "Miami",
      src: "./assets/Miami.jpg",
    },
  
    {
      title: "Roma",
      src: "./assets/Roma.jpg",
    },
  
    {
      title: "Sidney",
      src: "./assets/Sidney.jpg",
    },
  
    {
      title: "Vancouver",
      src: "./assets/Vancouver.jpg",
    },
  
    {
      title: "Whistler",
      src: "./assets/Whistler.jpg",
    },
  
    {
      title: "Montreal",
      src: "./assets/Montreal.jpg",
    },
  
    {
      title: "Moscu",
      src: "./assets/Moscu.jpg",
    },
  
    {
      title: "Ottawa",
      src: "./assets/Ottawa.jpg",
    },
  
    {
      title: "Polonia",
      src: "./assets/Polonia.jpg",
    },
  ];

  const controllesCities = {
      getCities: (req,res)=>{
          res.json({response:{cities}})
      }
  }
  module.export = controllesCities



//   Routes
  const Router = require('express').Router()
const controllerCities = require('../controllers/controllerCities')

const {getCities} = controllerCities

Router.route('/cities')
.get(getCities)

module.exports = Router




// Server
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes')
const app = express();
app.use(cors());
app.use('/api', Router)

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});


