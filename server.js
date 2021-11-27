
const  cities = [
    
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
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())




app.get("/prueba/dato",(req,res)=>{
    console.log("me llego un pedido get")
    res.json({respuesta:"hola que haces"})

})

app.get("/api/Cities", (req,res)=>{
    res.json({response:{cities}})
})


app.listen(4000, ()=>{console.log("server is listening on port 4000")})