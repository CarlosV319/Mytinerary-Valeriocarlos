const Router =require('express').Router();
const controllerCities =require('../controllers/controllerCities')


Router.route('/cities')
.get(controllerCities.obtenerCities)



module.exports = Router;