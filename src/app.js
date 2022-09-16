const express = require('express');
// const exphbs = require('express-handlebars');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// app.engine('hbs', exphbs.engine({
//   layoutsDir: 'views/',
//     defaultLayout: null,
//     extname: 'handlebars'
// }));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("", function(req,res){
  res.render('index');
});

app.get("/main",function(req,res){
  // alert("hii pk");
  // console.log("akshay");
  res.render("main");
});
app.get("/weather" , function(req,res){
  res.render('weather');
});

app.get("*" , function(req,res){
  res.render('error');
});

app.listen(port,function(){
  console.log(`server is running on port ${port}`);
});
