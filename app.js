const mongoose =require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors =require('cors')
const Customer =require('./database/Customer');
const Customer_route = require('./routes/Customer_route')
const Review_route =require('./routes/Report_route')
const Appointment_route =require('./routes/Appointment_route')


const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(Customer_route);
app.use(Review_route);
app.use(Appointment_route);
app.listen(90, () => {
    console.log("This server is running at port : 90");
});

