import homeRouter from './homeRouter.js';
import coursesRouter from './coursesRouter.js';
import adminRouter from './adminRouter.js';

function route(app){
    
    app.use('/admin',adminRouter);
    app.use('/courses',coursesRouter);
    app.use('/',homeRouter);

}

export default route;