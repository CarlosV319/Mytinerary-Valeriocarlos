const Router =require('express').Router();
const controllerCities =require('../controllers/controllerCities')
const controllerItineraries =require('../controllers/controllerItineraries')
const controllerUsuario=require('../controllers/controllerUsuario')
const validator=require('../config/validador')
const passport =require ('../config/passport')

const {obtenerCities,agregarCity,obtenerCity, borrarUnaCity,modificarUnaCity} = controllerCities
const {obtenerItineraries,agregarItinerary,obtenerItinerary, borrarUnaItinerary,modificarUnaItinerary,obtenerItinerariosCiudad} = controllerItineraries
const {newUser,logIn,tokenVerification}=controllerUsuario

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

Router.route('/auth/signUp')
.post(validator, newUser)

Router.route('/auth/signIn')
.post(logIn)

Router.route('/tokenVerification')
.get(passport.authenticate("jwt" ,{session:false}),tokenVerification)

module.exports = Router;