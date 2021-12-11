const express = require('express')

var router = express.Router();


const credentials = {

    email:'admin@gmail.com',
    password: '1111'
};


router.post('/login', (req, res)=>{

    if (req.body.email == credentials.email && req.body.password == credentials.password){

        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        // res.end('welcome to your dashboard')
    }else{   
        res.end('Invalid login')
    }

});

router.get('/dashboard', (req, res)=>{

    if (req.session.user){
        
        res.render('dashboard', {user:req.session.user})        
    } else {
        res.send('Unauthorized user')
    }


})


router.get('/logout', (req, res)=>{

        req.session.destroy();
        
        res.render('base', {title:'Logout',logout:'Logout Successfully'})
})

module.exports = router
