const knex=require('../database/connection')
const {tokenData ,authenticateToken}=require('../middleware/createToken')

const jwt = require("jsonwebtoken")




module.exports.customerLogin=async(req,res)=>{


    var email = req.body.email;
    var password = req.body.password;
    if (email === undefined || password === undefined){
        console.log({"Suggetion": "email and password both are require!"});
        res.send({"Suggetion": "email and password both are require!"})
    }else{
        knex.select('*')
        .from('customer')
        .where("email", email)
        .where("password", password)
        .then((data) => {
            // console.log(data);
            if (data.length>0){
                if (data[0].password === req.body.password){
                    var accessToken = jwt.sign({name:data[0].name,customer_id:data[0].customer_id}, "123",{expiresIn: "24h"})
                    // console.log(accessToken);
                    res.cookie("key", accessToken);
                    delete data[0].password;
                    // console.log(data);
                    let login_data = {"customer": {"schema":data[0]}, accessToken, expires_in: '24h'}
                    console.log(login_data);
                    res.send(login_data);
                }else{
                    res.send({
                        "Error": "Password is invalid"
                    })
                }
            }else{
                res.send({
                    "Error": "This user doesn't exists! please Signup....."
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    }

}