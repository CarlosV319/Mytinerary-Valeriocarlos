
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
 
const controllerCities = {
    obtenerCities:(req,res) =>{
        res.json({response:{cities:cities}})
    }
}

module.exports = controllerCities;