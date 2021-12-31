import express from 'express';
import homeController from '../controllers/HomeController.js';

const router = express.Router();

router.get('/login', homeController.login);
router.post('/login', homeController.signIn);
router.get('/register', homeController.register);
router.post('/register', homeController.signUp);
router.get('/',homeController.home);


export default router;