import express from 'express';
import * as ordersController from '../../controllers/orders/orders-controller.js' // import * = imports everything and puts it inside a itemsController object, so to access those imports we have to access it through itemsController object and we access things inside an object by doing . notation (i.e. .seedsItems)


const router = express.Router();


/////////////////////////////
// Routes / API Endpoints //
////////////////////////////

// All items routes (INDUCES = Index, New, Delete, Update, Create, Edit, Show) and their corresponding controller functions (CRUD = Create, Read, Update, Delete)


router.get('/seed', ordersController.seedOrders) //instead of defining a callback function directly in the /seed file example: router.get('/seed', () => {}), instead we are going to do separation of concerns which is putting the callback functions in their own file instead i.e. controllers/items/items-controller.js


///// INDUCES /////


// Index (Step 1 when building a route)
router.get('/', ordersController.getOrders);


// Create
router.post('/', ordersController.createOrder);


// // Edit
// router.get('/:id', ordersController.renderEditForm);


//Show
router.get('/:id', ordersController.getOrder);


export default router;