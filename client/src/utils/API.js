import axios from "axios";

export default {
  // Gets all products
  // eslint-disable-next-line
  getProducts: function() {
    return axios.get("/api/product");
  },
  // Gets the products with the given id
  // eslint-disable-next-line
  
  getProduct: function(_id) {
    return axios.get("/api/product/" + _id);
    
  },
 
  // Deletes the products with the given id
  deleteProduct: function(_id) {
    return axios.delete("/api/product/" + _id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/product", productData);
  }
};
