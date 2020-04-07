//mogelijkheden van module express aan de variabele express kopelen
let express = require("express");
let path = require("path");

//webapplicatie aanmaken van het type express
let app = express();

//werken met EJS
app.set("view engine", "ejs");

// aan de applicatie vertellen dat we werken met views
app.set("views",path.resolve(__dirname, "views")); //naam map, locatie map denk ik

// vertel aan webserver waar de publieke bestanden zitten
app.use(express.static('public'));

app.get('/contact.ejs', function(req,res){
  res.render('contact', {
  });
});

//NIEUW STUK---------------------------------------------------------------------------------------------
// databestand inladen
const blogposts = require('./data/blog.json');

// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('startp', {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: blogposts.blog
  });
});

// detailpagina van een blogbericht
app.get('/blog/:postid', function(req,res){
  res.render('detail', {
    post: blogposts.blog[req.params.postid]
  });
})

// route naar "portfoliopagina" laten werken
app.get('/overzicht.ejs', function(req,res){
  res.render('overzicht', {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: blogposts.blog
  });
});

// detailpagina van een blogbericht
app.get('/blog/:postid', function(req,res){
  res.render('detail', {
    post: blogposts.blog[req.params.postid]
  });
});

//NIEUW STUK---------------------------------------------------------------------------------------------

//webserver opstarten of laten draaien op HEROKU
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() { });
