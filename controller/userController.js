const createUser = async(req,res)=>{
    try{
        const response = await userSchema.create(req.body);

        res.status(200).send({
            isError:false,
            message:"User created successfully",
            data:req.body,
        })
    }catch(error){
        res.status(500).send({
            isError:true,
            message:"User creation failed",
            data:null,
        });
    }
};

module.exports = {
    createUser
};