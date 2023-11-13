import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';


import { dev } from './config/config.js';

const app = express();
const port = dev.app.port || 8080;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}` );
})

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    limit: 100, // 100 requests,
    message: "Too many requests",
});

app.use(limiter);

app.use(cors());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send('Just wanted to check!')
})

//client error
app.use((req, res, next) => {
    res.status(404).json({
      message: "Not found",
    });
})
//server error
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message ||"Internal server error",
    });
})