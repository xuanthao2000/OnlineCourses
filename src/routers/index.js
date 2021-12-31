import homeRouter from './homeRouter.js';
import coursesRouter from './coursesRouter.js';

function route(app){
    
    app.use('/courses',coursesRouter);
    app.use('/',homeRouter);
}

export default route;