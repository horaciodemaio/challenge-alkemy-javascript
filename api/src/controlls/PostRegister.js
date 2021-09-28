const {Register, Type } = require("../db");
const { Op } = require("sequelize");

const PostRegister = async (req,res,next) => {
    const {concept, amount, date, type} = req.body;

    try {
        if(!concept || !amount || concept==="" || amount===""){
            return res.json({messege: "concept and amount are required fields"})
        }
        const addRegister = await Register.findOrCreate({
            where:{
                    
                concept: concept,
                amount: amount,
                date: date
            }
                
        })
        console.log(type);
        
        if(type && type.length>0){
            type.forEach(async (name)=>{
                const Types = await Type.findOne({
                    where:{
                        name: {
                            [Op.iLike]: `%${name}%`,
                        },
                    }
                });
                await Types.addRegister(addRegister[0])
            
            })
        }   
        if (addRegister[1]===true) {
            return res.status(200).json({messege:'Successfully created register'})
        }else{
            return res.status(200).json({messege:'The register already exists'})
        }
       
    } catch (error) {
        next(error);
    }
}

module.exports = {
    PostRegister
};