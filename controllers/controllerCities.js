
// const cities = [
//     {
//       title: "Arabia Saudita",
//       src: "./assets/ArabiaSaudita.jpg",
//     },
  
//     {
//       title: "Grecia",
//       src: "./assets/Grecia.jpg",
//     },
  
//     {
//       title: "Indonesia",
//       src: "./assets/Indonesia.jpg",
//     },
  
//     {
//       title: "Miami",
//       src: "./assets/Miami.jpg",
//     },
  
//     {
//       title: "Roma",
//       src: "./assets/Roma.jpg",
//     },
  
//     {
//       title: "Sidney",
//       src: "./assets/Sidney.jpg",
//     },
  
//     {
//       title: "Vancouver",
//       src: "./assets/Vancouver.jpg",
//     },
  
//     {
//       title: "Whistler",
//       src: "./assets/Whistler.jpg",
//     },
  
//     {
//       title: "Montreal",
//       src: "./assets/Montreal.jpg",
//     },
  
//     {
//       title: "Moscu",
//       src: "./assets/Moscu.jpg",
//     },
  
//     {
//       title: "Ottawa",
//       src: "./assets/Ottawa.jpg",
//     },
  
//     {
//       title: "Polonia",
//       src: "./assets/Polonia.jpg",
//     },
//   ];
const City = require('../models/City')

const controllerCities = {
    obtenerCities:(req,res) =>{
      const cities = City.find()
      .then((respuesta) => res.json({respuesta:respuesta}))
       
    },


      agregarCity: (req,res)=>{
      const {name,img,description} = req.body
      const city = new City({name,img,description}).save()
      
      // res.json({respuesta:cities})
      }
}
module.exports = controllerCities;