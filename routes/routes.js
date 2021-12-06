const Router =require('express').Router();
const controllerCities =require('../controllers/controllerCities')
const controllerItineraries =require('../controllers/controllerItineraries')

const {obtenerCities,agregarCity,obtenerCity, borrarUnaCity,modificarUnaCity} = controllerCities
const {obtenerItineraries,agregarItinerary,obtenerItinerary, borrarUnaItinerary,modificarUnaItinerary,obtenerItinerariosCiudad} = controllerItineraries


Router.route('/cities')
.get(obtenerCities) 
.post(agregarCity)


Router.route('/cities/:id')
.get(obtenerCity)
.delete(borrarUnaCity)
.put(modificarUnaCity)

Router.route('/itineraries')
.get(obtenerItineraries) 
.post(agregarItinerary) 


Router.route('/itineraries/:id')
.get(obtenerItinerary)
.delete(borrarUnaItinerary)
.put(modificarUnaItinerary)

Router.route('/city/itinerary/:id')
.get(obtenerItinerariosCiudad)

module.exports = Router;