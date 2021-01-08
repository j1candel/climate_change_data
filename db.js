const Pool = require("pg").Pool 

const pool =  new Pool({
    user:"postgres",
    password:"T0nielt1gre",
    database:"climate_change",
    host: "https://climate-change-1.herokuapp.com/",
    port: 5432
})

module.exports = pool;