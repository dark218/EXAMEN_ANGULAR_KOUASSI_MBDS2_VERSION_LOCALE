const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const matiereRoutes = require('./routes/matiere');
const assignmentRoutes = require('./routes/assignment');
const assignmentrRoutes = require('./routes/assignmentr');
const professeurRoutes = require('./routes/professeur');
const userRoutes = require('./routes/user');



mongoose.connect('mongodb://localhost:27017/gestiondevoir', { useNewUrlParser: true, useUnifiedTopology: true })
    //mongoose.connect('mongodb+srv://root:root@cluster0.stq7n.mongodb.net/AssigmentsApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to database!');
    })
    .catch(() => {
        console.log('connection failed! ');
    });
mongoose.set('useCreateIndex', true);

//OJx2X4IllVNl9up4


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(path.join("images")));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
        "HTTP/1.1 200 OK",
        "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS,PUT"
    );
    next();
});



app.use("/api/matiere", matiereRoutes);
app.use("/api/assignment", assignmentRoutes);
app.use("/api/assignmentr", assignmentrRoutes);
app.use("/api/professeur", professeurRoutes);
app.use("/api/user", userRoutes);


module.exports = app;