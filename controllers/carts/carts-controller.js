import Cart from '../../models/carts/carts-model.js'

//this is my seed for seed route
async function seedCarts(req, res) {
    try {
        //we need access to the model we created in /routes/items/items-router.js 'Items'
        //anytime you're interacting with the database, we need to do it asychronously by using async/await 
        //we put await here because we want to make sure that all fruits get deleted before we begin to execute anything else, WHY***?
       await Cart.deleteMany({}) //we leave the object empty so it will query for everything instead of something specific. It deletes all of the documents inside of this specific database.
       await Cart.create(
        {
           productName: 'Cruiselinen Aria Dress',
           quantity: '1',
           price: '148'
        },
        {
           productName: 'Eleta Linen Maxi Dress',
           quantity: '1',
           price: '168'
        },
        {
           productName: 'Little Cropped Jacket',
           quantity: '1',
           price: '138.60'
        },
        {
           productName: '90s Slit Midi Dress',
           quantity: '1',
           price: '128' 
        }
     );
     res.status(201).redirect('/carts'); //created = 201. we redirect the user back to /items because /items is the index route where we can see all the items
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Now we are creating another function called items //
// function for INDEX (Step 2 - for creating a route which is now creating the controller)

async function getCarts(req, res){
    try {
        const carts = await Cart.find({}); //here we are finding all the items
        res.status(200).json(carts); // here we share what we find with the clients.
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// // function for New
// async function renderNewForm(req, res) {
//     try {
        
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }


// function for Delete 
async function deleteCart(req, res){
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(cart); 
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// function for Update 
async function updateCart(req, res){
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



// function for CREATE 
async function createCart(req, res){
    try {
        //if was using a boolean like readyToEat you would need to account for the checkbox by doing this = req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false; 
        const cart = await Cart.create(req.body);
        console.log(cart);
        res.status(201).json(cart); //send the item created back as a response
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}




// funciton for New
//this is what renders the new.ejs file
async function renderNewForm(req, res){
    try {
        //here we are rendering the form from the new.ejs file
        // in the views folder next go inside the items folder and then render the new.ejs file
        res.render('./carts/new.ejs')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// funciton for Edit
//this is what renders the new.ejs file
async function renderEditForm(req, res){
    try {
        //here we are rendering the form from the new.ejs file
        // in the views folder next go inside the items folder and then render the new.ejs file
        res.render('./carts/new.ejs')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}






//export controller function (Step 3 - export the function and then test it. At this point it should already be imported into routes folder as: import * as itemsController from '../../controllers/items/items-controller.js' and the route as: router.get('/new', itemsController.renderNewForm) and this: export default router;)
// always test after exporting: 
export {
    seedCarts,
    getCarts,
    deleteCart,
    updateCart,
    createCart,
    renderNewForm,
    renderEditForm
}