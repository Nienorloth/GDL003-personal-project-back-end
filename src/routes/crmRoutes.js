const { 
    getProducts, 
    addNewProduct, 
    getProductID, 
    editProductID, 
    deleteProductID, 
    getOrders, 
    addNewOrder, 
    getOrderID, 
    editOrderID, 
    deleteOrderID, 
} = require('../controllers/crmController');


const routes = (app) => {

    app.route('/products')
    //GET endpoint for getProducts
    .get(getProducts);

    app.route('/addProduct')
    //GET and POST endpoints for addNewProduct
    .get(getProducts)
    .post(addNewProduct);

    app.route('/products/:productId')
    //GET PUT DELETE endpoints for specific ID product
    .get(getProductID)
    .put(editProductID)
    .delete(deleteProductID);

    app.route('/orders')
    //GET and POST endpoints for orders
    .get(getOrders)
    .post(addNewOrder);

    //GET PUT DELETE endpoints for specific ID order
    app.route('/orders/:orderId')
    .get(getOrderID)
    .put(editOrderID)
    .delete(deleteOrderID);
}

module.exports = routes;