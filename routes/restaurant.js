const expr=require('express');
const Rescontroller= require('../controllers/restaurants'); 
const MealController=require('../controllers/mealtype');
const route=expr.Router();

route.get('/CityList', Rescontroller.GetAllRestaurants)
route.get('/MealType',MealController.Mealtype)
route.get('/:city', Rescontroller.GetResByName)

module.exports=route;