class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.inStock = true;
    }
  
    display() {
      return (
        "Name: " +
        this.name +
        ", " +
        "Price: $" + // Add dollar sign before price
        this.price +
        ", " +
        "Description: " +
        this.description
      );
    }
  }
  
  module.exports = Product;