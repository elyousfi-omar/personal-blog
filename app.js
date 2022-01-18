const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const { redirect, render } = require('express/lib/response');
const req = require('express/lib/request');
const { findById } = require('./models/blog');

const app = express();

// Connection to MongoDB
//const dbURI = past your mongodb database URI here.

mongoose.connect(dbURI).then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// Routing
app.use(blogRoutes);

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About me'});
});

// 404 page:
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});