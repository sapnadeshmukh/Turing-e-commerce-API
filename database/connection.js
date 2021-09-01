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

    knex.schema.createTableIfNotExists('cart', function(table){
        table.increments('item_id').primary();
        table.string('cart_id');
        table.integer('product_id');
        table.string('attributes');
        table.integer('quantity');
        table.integer('buy_now');
        table.datetime('added_on');
     }).then(() => {
        console.log("cart table created successfully....")
     }).catch(() => {
        console.log("cart table is already exists!");
    })


    knex.schema.createTableIfNotExists('later', function(table){
        table.increments('item_id').primary();
        table.string('cart_id');
        table.integer('product_id');
        table.string('attributes');
        table.integer('quantity');
        table.integer('buy_now');
        table.datetime('added_on');
    }).then(() =>{
        console.log("later table created successfully....!")
    }).catch((err) =>{
        console.log("later table is already exists")
    })
  



module.exports=knex



