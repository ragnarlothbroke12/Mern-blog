import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Database connected");
}).catch(error=>{
    console.log(error);
});

const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is runing on port 3000 !");
});


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const meassage = err.meassage || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        meassage
    });
});
