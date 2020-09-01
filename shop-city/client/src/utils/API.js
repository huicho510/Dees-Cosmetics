import axios from "axios";

export default {
  // Gets all products
  // eslint-disable-next-line
  getProduct: function() {
    return axios.get("/api/products");
  },
  // Gets the products with the given id
  // eslint-disable-next-line
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the products with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};
