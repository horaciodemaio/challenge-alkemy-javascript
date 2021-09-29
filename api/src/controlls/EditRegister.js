const { Register, Type } = require('../db');


async function editRegister(req, res, next) {
    const {id, concept, amount, date} = req.body;
    try {
        
        if ( (!concept || concept==="") && (!amount || amount==="") && (!date || date==="") ) {
            return res.status(200).json({message:"minimum of one field is required to make a change"});
        }

        const OneRegister = await Register.findAll({
            where:{
                id: id,
            }
        })

        if(OneRegister.length>0){
            var Parameters = {};
            if(concept && concept!==""){
                Parameters.concept= concept;
            }
            if(amount && amount!==""){
                Parameters.amount= amount;
            }
            if(date && date!==""){
                Parameters.date= date;
            }

            await Register.update(Parameters, {
                where: {
                    id: id,
                },
            });
            
            return res.status(200).json({message:"successfully changed."});
        }else{
            return res.status(200).json({message:"this operation does not exist"});
        }

    } catch (error) {

        next(error)
    };
};

module.exports = {
    editRegister,
};
