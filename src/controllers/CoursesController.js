import Course from '../models/Course.js';
import Account from '../models/Account.js';
import utils from '../untils/mongoose.js';
class CoursesController{
    courses(req,res,next){
        Course.find({})
        .then(courses => {
            res.render('courses', {
                courses: utils.mutipleMongooseObject(courses),
            })
        })
        .catch(err => console.log(err.message))
    }
    detailsCourse(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then( courses => {
            res.render('detailsCourse', { 
            courses: utils.mongooseToObject(courses)
        })})
        .catch(next)
    }
    listCourses(req,res,next){
        Course.find({})
        .then( courses => { res.render('admin/listCourses',  {
            courses: utils.mutipleMongooseObject(courses),
        })})
        .catch(next)
    }
    create(req,res){
        res.render('admin/courses/create')
    }
    createPost(req,res){
        const formData = req.body;
        console.log(req.body)
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
        .then( () => {
            res.redirect('/admin/courses')
        })
        .catch(err => {err.message})
    }
    edit(req,res){
        Course.findById(req.params.id)
        .then( courses => { 
            res.render('admin/courses/edit', {
                courses: utils.mongooseToObject(courses)
            })
        }).catch(err => {console.log(err.message)})
        
    }
    editPut(req,res){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => {
            res.redirect('/admin/courses');
        })
        .catch(err => { console.log(err.message)})
    }
    delete(req,res){
        Course.deleteOne({_id: req.params.id})
        .then( () => res.redirect('/admin/courses'))
        .catch(err => { console.log(err.message)})
    }

    
}

export default new CoursesController();