import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import userRouter from './router/user.router'
import categoryRouter from './router/category.router'
import productRouter from './router/product.router'
import cors from 'cors'
const app = express();


app.use(express.json())
app.use(express.static(__dirname))
const port = 5000;



app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

var corsOptions = {
    
    optionsSuccessStatus: 200, 
    methods: "GET, PUT, PATCH, POST, DELETE"
}

app.use(cors(corsOptions));

app.listen(port, () =>{
    console.log(`example app listening on port ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/myproject')
.then(()=>{
    console.log("Database successfully connnected!");
})
.catch((err)=>{
    console.log("Error: ",err)
})

app.use('/user',userRouter)
app.use('/category',categoryRouter)
app.use('/product',productRouter)