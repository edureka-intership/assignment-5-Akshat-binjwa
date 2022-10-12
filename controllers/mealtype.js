//Solution for question 3//

const mealmodel=require('../models/meltype.json');

exports.Mealtype=(req,res)=>{
    res.status(200).json({
        data:mealmodel
})
}