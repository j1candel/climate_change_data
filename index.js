const express = require("express")
const app = express()
const pool = require("./db")

// const Pool = require("pg").Pool 

// const pool =  new Pool({
//     user:"postgres",
//     password:"T0nielt1gre",
//     database:"climate_change",
//     host: "localhost",
//     port: 5432
// })

// module.exports = pool;

// app.use(express.json())



app.get("/todos", async(req,res)=>{
 try {
     const allCleanData =  await pool.query("SELECT * FROM cleaned_global_land_temperatures_by_major_city WHERE city = 'Paris'" );
     res.setHeader("Access-Control-Allow-Origin","*")
     res.json(allCleanData.rows)
} catch (error) {
     console.log(error.message)
 }
})


app.listen(5000, () => {
     console.log("server is listening to port 5000")
})