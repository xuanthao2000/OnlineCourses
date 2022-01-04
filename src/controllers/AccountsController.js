import Account from '../models/Account.js';
import utils from '../untils/mongoose.js';

class AccountsController{

    listAccounts(req,res,next){
        Account.find({})
        .then( accounts => { res.render('admin/listAccounts',  {
            accounts: utils.mutipleMongooseObject(accounts),
        })})
        .catch(next)
    }

    create(req,res){
        res.render('admin/accounts/create')
    }

    createPost(req,res){
        const formData = req.body;
        formData.isAdmin = false;
        const account = new Account(formData);
        account.save()
        .then(() => res.redirect('/admin/accounts'))
        .catch(err => { console.log(err.message)})
    }

    edit(req,res,next){
        Account.findById(req.params.id)
        .then( accounts => res.render('admin/accounts/edit', { 
            accounts: utils.mongooseToObject(accounts)
        }))
        .catch(next)
    }

    editPut(req,res){
        const formData = req.body;
        if(req.body.isAdmin == true)
            formData.isAdmin = true;
        else
            formData.isAdmin = false;
        Account.updateOne({_id: req.params.id}, formData)
        .then( () => res.redirect('/admin/accounts'))
        .catch(err => {console.log(err.message)})
    }
}

export default new AccountsController();