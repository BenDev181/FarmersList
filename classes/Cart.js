const Product = require('./Product.js');

class Cart {
    constructor() {
        this.products = [];
        this.total = 0;

    }
    addProcuct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(index) {
        this.products.splice(index, 1);
        this.total -= this.products[index].price;
    }

}

module.exports = Cart;