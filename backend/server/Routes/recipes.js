const express = require('express');
const Router = express.Router();
const recipeController = require('../../server/controllers/recipeCtrl')

Router.post('/', recipeController.createRecipe)
Router.get('/', recipeController.getAllrecipe)
Router.get('/:id', recipeController.getOneRecipe)
Router.put('/:id', recipeController.updateRecipe)
Router.delete('/:id', recipeController.deleteRecipe)

module.exports = Router;
