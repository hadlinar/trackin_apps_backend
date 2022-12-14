const compression = require('compression')
const express = require("express");
const cors = require("cors");
const app = express();
const http = require('http')

const userRouter = require('./routes/User.js')
const loperRouter = require('./routes/Loper.js')
const branchRouter = require('./routes/Branch.js')
const loginRouter = require('./routes/Login.js')
const pengirimanFakturRouter = require('./routes/PengirimanFaktur.js')
const trackingLoperRouter = require('./routes/TrackingLoper.js')
const logoutRouter = require('./routes/Logout.js')

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

const port = 3000

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

const hostname = '127.0.0.1'

http.createServer(app).listen(port, () => {
    console.log(`Server running at on port ${port}`);
});