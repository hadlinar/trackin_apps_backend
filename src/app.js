import express from 'express'
import cors from 'cors'
import compression from 'compression'

import userRouter from './routes/User.js'
import loperRouter from './routes/Loper.js'
import branchRouter from './routes/Branch.js'
import loginRouter from './routes/Login.js'
import pengirimanFakturRouter from './routes/PengirimanFaktur.js'
import trackingLoperRouter from './routes/TrackingLoper.js'
import logoutRouter from './routes/Logout.js'

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTION, PUT, PATCH, DELETE, HEAD"
    )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(userRouter);
app.use(loperRouter);
app.use(branchRouter);
app.use(loginRouter);
app.use(pengirimanFakturRouter);
app.use(trackingLoperRouter);
app.use(logoutRouter);

// app.listen(5000, () => console.log('Server running at http://localhost:5000'))

const http = require('http')
const port = 3001

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

const hostname = '127.0.0.1'

http.createServer(app).listen(port, () => {
    console.log(`Server running at on port ${port}`);
});