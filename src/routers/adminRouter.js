import express from 'express';
import coursesController from '../controllers/CoursesController.js';
import accountsController from '../controllers/AccountsController.js';

const router = express.Router();

router.get('/courses', coursesController.listCourses)
router.get('/courses/create', coursesController.create)
router.post('/courses/createP', coursesController.createPost)
router.get('/courses/edit/:id', coursesController.edit)
router.put('/courses/edit/:id', coursesController.editPut)
router.delete('/courses/delete/:id', coursesController.delete)

router.get('/accounts', accountsController.listAccounts)
router.get('/accounts/create', accountsController.create)
router.post('/accounts/createP', accountsController.createPost)
router.get('/accounts/edit/:id', accountsController.edit)
router.put('/accounts/edit/:id', accountsController.editPut)

export default router;