const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const{v4:uuidv4} = require('uuid');
const router = require('./router');


const PORT = process.env.PORT || 3000

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(session({

    secret:uuidv4(),
    resave:false,
    saveUninitialized:true

}))


app.use('/route',router)


app.get('/' ,(req, res)=>{
    
    res.render('base', {title:"Login system"});

})


app.listen(PORT, ()=>{

    console.log(`server started at http://localhost${PORT}`)

})




    