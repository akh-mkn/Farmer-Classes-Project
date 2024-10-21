class Cart {
    constructor() {
      this.products = [];
      this.total = 0;
    }
  
    addProduct(product) {
      this.products.push(product);
      this.total += product.price;
    }
  
    removeProduct(index) {
      if (index >= 0 && index < this.products.length) {
        const product = this.products[index];
        this.total -= product.price; // adjust the total cost
        this.products.splice(index, 1); // remove the product at the given index
      } else {
        console.error("Invalid index");
      }
    }
  }

  module.exports = Cart