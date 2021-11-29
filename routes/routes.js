const Router =require('express').Router();
const { get } = require('http');
const { modificarCity } = require('../controllers/controllerCities');
const controllerCities =require('../controllers/controllerCities')

const {obtenerCities,agregarCity,obtenerCity, borrarUnaCity,modificarUnaCity} = controllerCities

Router.route('/cities')
.get(obtenerCities)
.post(agregarCity)

Router.route('/cities/:id')
.get(obtenerCity)
.delete(borrarUnaCity)
.put(modificarUnaCity)
// .delete(borrarcity)


module.exports = Router;