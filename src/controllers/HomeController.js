import Account from '../models/Account.js';
import utils from '../untils/mongoose.js';
class HomeController{
    home(req,res,next){
        res.render('home');
    }

    login(req,res){
        res.render('login');
    }

    signIn(req, res, next){
        
        Account.findOne({username: req.body.username},(err, account) => {
            if(account){
                if(req.body.password == account.password)
                {
                    res.render('home');
                }else
                    res.render('login');
                
            }else
                console.log('Sai tên đăng nhập hoặc mật khẩu');
        }
        )

          
    }
    register(req,res){
        res.render('register');
    }
    
    signUp(req,res){
        const formData = req.body;
        formData.isAdmin = false;
        const account = new Account(formData);
        account.save()
        .then(() => res.render('login'))
        .catch(err => { console.log(err.message)})
        
    }
}

export default new HomeController();