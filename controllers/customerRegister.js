const knex=require('../database/connection')
const jwt=require('jsonwebtoken')
// const jwtToken=require('../middleware/createToken')
const {tokenData ,authenticateToken}=require('../middleware/createToken')




module.exports.customerRegister=(req,res)=>{

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    if (name === undefined || email === undefined || password === undefined){
        console.log({"Suggetion": "name, email and password all are required"});
        res.send({"Suggetion": "name, email and password all are required"});
    }else{
        const Data = { email: req.body.email }
        const accessToken = tokenData(Data, process.env.SECRETKEY,{expiresIn: "24h"})
        console.log(accessToken)
        res.cookie("key=", accessToken);
        // console.log(accessToken );
        knex
        .select('*')
        .from('customer')
        .where({"name": name, "email": email, "password": password})
        .then((data) => {
            // console.log(data);
            if (data.length<1){
                knex('customer').insert(req.body)
                .then((result) =>{
                    knex
                    .select('*')
                    .from('customer')
                    .where('email',email)
                    .then((user) =>{
                        // console.log(user);
                        userdata = {'customer': {'schema': user[0]}, accessToken: accessToken, expires_in: '24h'}
                        console.log(userdata)
                        res.send(userdata);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }).catch((err) =>{
                    console.log(err);
                })
            }else{
                res.send({
                    "exist": "this user alredy exists.."
                })
            }
        })
    }
    
}
    

