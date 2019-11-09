require('dotenv').config();

const mongoose = require('mongoose');
const { productsSchema, orderSchema } = require('../models/crmModel');
const product = mongoose.model('product', productsSchema);
const order = mongoose.model('order', orderSchema);

exports.addNewProduct = (req, res) => {
    let newProduct = new product(req.body);

    newProduct.save((error, product) => {
        /*if (req.get('Authorization') === process.env.TOKEN) {
            res.json(product);
        } else {
            res.send('Not authorized');
        }*/
         if (error) {
            res.send(error);
         }
         res.json(product);
    });
};

exports.getProducts = (req, res) => {
    product.find({}, (error, product) => {
       /* if (req.get('Authorization') === process.env.TOKEN) {
            res.json(product);
        } else {
            res.send('Not authorized');
        }*/
        if (error) {
            res.send(error);
        }
        console.log(product);
         res.json(product);
    });
};

exports.getProductID = (req, res) => {
    product.findById(req.params.productId, (error, product) => {
        /*if (req.get('Authorization') === process.env.TOKEN) {
            res.json(product);
        } else {
            res.send('Not authorized');
        }*/
         if (error) {
         res.send(error);
        }
         res.json(product);
    });
};

exports.editProductID = (req, res) => {
       product.findOneAndUpdate({_id: req.params.productId}, req.body, { new: true}, (error, product) => {
       /* if (req.get('Authorization') === process.env.TOKEN) {
            res.json(product);
        } else {
            res.send('Not authorized');
        }*/
         if (error) {
         res.send(error);
         }
         res.json(product);

    });
};

exports.deleteProductID = (req, res) => {
    product.remove({_id: req.params.productId}, (error, product) => {
        /*if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Product has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        }*/
         if (error) {
         res.send(error);
         }
         res.json(product);
    });
};


exports.addNewOrder = (req, res) => {
    let newOrder = new order(req.body);

    newOrder.save((error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }  
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.getOrders = (req, res) => {
    order.find({}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.getOrderID = (req, res) => {
    order.findById(req.params.orderId, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);    
    });
};

exports.editOrderID = (req, res) => {
    order.findOneAndUpdate({_id: req.params.orderId}, req.body, { new: true}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json(order);
        } else {
            res.send('Not authorized');
        }
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);
    });
};

exports.deleteOrderID = (req, res) => {
    order.remove({_id: req.params.orderId}, (error, order) => {
        if (req.get('Authorization') === process.env.TOKEN) {
            res.json({ message: "Order has been succesfully deleted" });
        } else {
            res.send('Not authorized');
        } 
        // if (error) {
        //     res.send(error);
        // }
        // res.json(order);    
    });
};
