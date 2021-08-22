require('dotenv').config()

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:process.env.db,
        user:process.env.user,
        password:process.env.password,
        database:process.env.db_name
    },
});
knex.connection((err,result) => {
    if(err)throw err
        console.log("Database connected!!!")
    });
  



module.exports=knex



