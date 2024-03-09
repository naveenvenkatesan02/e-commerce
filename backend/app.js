const express = require('express');
const app = express();
const cors = require('cors');
const path= require('path')
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST","GET"],
    credentials: true
}
));
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})
const connectDatabase = require('./config/connectDatabase')
const port = process.env.PORT || 8000;
connectDatabase();
const user = require('./routes/user')
const login = require('./routes/login')
app.use('/api/v1',user)
app.use('/api/v1',login)
// app.post('/',(req,res,next)=>{
//     const {username, email, phone, password} = req.body;
//     console.log(req.body)
// })
app.listen(port, ()=>{
    console.log('Server is runnning successfully')
})