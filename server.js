const express=require('express')
const app=express();
const connectDB=require('./config/db')
const routes=require('./routes/routes')

app.use(express.json())

connectDB();

app.use('/todo/api',routes);

app.listen(3000,()=>{
    console.log('Server is up and running')
})