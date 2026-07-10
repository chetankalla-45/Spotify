import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import songRouter from './src/routes/songRoute.js'
import albumRouter from './src/routes/albumRoute.js'

import connectDB from './src/config/mongodb.js'



// app config
const app = express()
const port = process.env.PORT || 4000


// database
connectDB()



// middleware


app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://spotify-m8np.vercel.app"
    ],
    credentials: true
}));


// routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)


app.get('/',(req,res)=>{
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})