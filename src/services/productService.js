import AxiosService from "./axiosService";

const axios = new AxiosService();

export default class ProductService {
    baseURL = "https://new-bookstore-backend.herokuapp.com/";

    getProduct = () => {
        return axios.getMethod(`${this.baseURL}bookstore_user/get/book`);
    }
}