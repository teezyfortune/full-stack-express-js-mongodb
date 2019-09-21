const config = require('../../server/models/config')
const Recipe = require('../../server/models/recipeschema')

exports.createRecipe = (req, res, next) => {
    const newRecipe = new Recipe ({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time,
     })
     newRecipe.save().then(() => {
        res.status(201).json({
            status:'success',
            message: 'created succesdully'
        })
     }).catch((error)  =>{ 
        res.status(400).json({
             error: error
         })
    })
}

exports.getOneRecipe = (req, res) => {
    Recipe.findOne({
        _id: req.params.id
    })
    .then((oneRecipe) => {
        res.status(200).json(oneRecipe)
    }).catch((err)=>{
        res.status(400).json({
            error: error
        })
    })
}

exports.getAllrecipe = (req, res ) => {
Recipe.find()
.then((recipes) => {
    res.status(200).json(recipes)
}).catch((error) => {
    res.status(200).json({
        error: error
    })
})
}

exports.updateRecipe = (req,res) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time,
        _id: req.params.id
    })

    Recipe.updateOne({_id:req.params.id}, recipe)
    .then(() => {
        res.status(201).json(recipe)
    }).catch((error) => {
        res.status(400).json({
            error: new Error('something went wrong, please try again')
        })
    })
}
exports.deleteRecipe = (req, res) => {
Recipe.deleteOne({_id: req.params.id})
.then(()=> {
    res.status(200).json({
        message: 'deleted'
    })
}).catch((error) => {
    res.status(400).json({
        error: new Error('something went wrong, pleadse try again')
    })
})

}