export function validate(shema) {

    return (req,res,next)=>{
        const {error} = shema.validate(req.body,{abortEarly : false});

        if(!error){
            next();
        }else{
            res.json({message : error.details});
        }

    }

}