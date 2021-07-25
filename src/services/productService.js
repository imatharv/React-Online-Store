import AxiosService from "./axiosService";

const axios = new AxiosService();

export default class ProductService {
    baseURL = "https://new-bookstore-backend.herokuapp.com/";

    getProduct = () => {
        return axios.getMethod(`${this.baseURL}bookstore_user/get/book`);
    }

    addToCart = (product_id, token) => {
        return axios.postMethod(`${this.baseURL}bookstore_user/add_cart_item/${product_id}`, null, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    getCartItems = (token) => {
        return axios.getMethod(`${this.baseURL}bookstore_user/get_cart_items`, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    updateCartItemsQuantity = (cartItem_id, token) => {
        return axios.putMethod(`${this.baseURL}bookstore_user/cart_item_quantity/${cartItem_id}`, { headers: {"Authorization" : token} });
    }

    removeFromCart = (cartItem_id, token) => {
        return axios.postMethod(`${this.baseURL}bookstore_user/remove_cart_item/${cartItem_id}`, { headers: {"Authorization" : token} });
    }
}