const ModelData=require("../models/restaurant.json");


// Solution for Qestion-1//
exports.GetAllRestaurants=(req,res)=>{
    const filtereddata=ModelData.map((item)=>item.city)

    res.status(200).json({
        data: filtereddata
    })
}


//Solution for quesiton-2//
exports.GetResByName=(req,res)=>{
    //logic 
    const filtereddata=ModelData.filter((item)=>item.city==req.params.city)
  
    filtereddata.length?
    res.status(200).json({
        data: filtereddata
        
    }):
    res.status(200).json({
        message: " i seems like it does'nt exist at all"
    })
}