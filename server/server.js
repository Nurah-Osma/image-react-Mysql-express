require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT||8004;

const cors = require('cors');

const router=require('./router/router')



/// DB ///
const db =require('./database/database')

  app.use(cors())
  app.use(express.json());

app.use("/uploads",express.static("./uploads"))
app.use(router)


app.listen(PORT,()=>{
   console.log(`ServerApp is listening on port ${PORT}`);
})