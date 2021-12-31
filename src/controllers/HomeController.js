

class HomeController{
    home(req,res,next){
        res.render('home');
    }

    login(req,res){
        res.render('login');
    }

    signIn(req,res){
        res.render('login');
    }
    register(req,res){
        res.render('register');
    }
    
    signUp(req,res){
        res.render('register');
    }
}

export default new HomeController();