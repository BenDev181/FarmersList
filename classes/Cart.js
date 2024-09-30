const Product = require('./Product');

class Cart {
  constructor() {
    this.products = []; 
    this.total = 0;     
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error('Only instances of Product can be added');
    }
    this.products.push(product); 
    this.total += product.price;  
  }

  removeProduct(index) {
    if (index >= 0 && index < this.products.length) {
      this.total -= this.products[index].price; 
      this.products.splice(index, 1); 
    } else {
      console.log('Invalid index'); 
    }
  }
}

module.exports = Cart;