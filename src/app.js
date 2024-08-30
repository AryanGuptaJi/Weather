const  express= require('express');
const app=express();
const port= process.env.PORT || 7000;
const path = require('path');
const hbs = require('hbs');


//public static
const static_Path=path.join(__dirname, "../public");
const templatePath= path.join(__dirname, "./template/views");
const partials_path= path.join(__dirname, "./template/partials");
app.set('view engine' , 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partials_path);
app.use(express.static(static_Path));




//routing
app.get("" ,(req, res)=>{
    res.render('index')
})


app.get("/about" ,(req, res)=>{
    res.render('about')
})

app.get("/weather" ,(req, res)=>{
    res.render("weather")
})


app.get("*" ,(req, res)=>{
    res.render("404",{
        errorMsg: "Opps! Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})