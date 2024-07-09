import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import foodRouter from './routes/foodRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
// Use body-parser to handle JSON payloads and increase limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// db connection
connectDB();

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/food', foodRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
// Static files (if using file system for images)
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
