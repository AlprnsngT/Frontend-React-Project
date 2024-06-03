import axios from 'axios';

// axios ile httpRequest atıyoruz
export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }
}
