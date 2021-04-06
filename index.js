const express = require('express');
const app = express();
const galleryData = require('./data/gallery.json');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('listening', 'http://localhost:3000')
})

app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.get('/team', (req, res) => {
    res.render('pages/team')
})
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/gallery', (req, res) => {
    res.render('pages/gallery', { galleryData })
})