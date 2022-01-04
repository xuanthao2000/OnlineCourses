import express from 'express';
import coursesController from '../controllers/CoursesController.js';

const router = express.Router();

router.get('/', coursesController.courses);
router.get('/:slug', coursesController.detailsCourse);

export default router;