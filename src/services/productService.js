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

    updateCartItemsQuantity = (cartItem_id, data, token) => {
        return axios.putMethod(`${this.baseURL}bookstore_user/cart_item_quantity/${cartItem_id}`, data, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    removeCartItem = (cartItem_id, token) => {
        return axios.deleteMethod(`${this.baseURL}bookstore_user/remove_cart_item/${cartItem_id}`, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    getWishlistItems = (token) => {
        return axios.getMethod(`${this.baseURL}bookstore_user​/get_wishlist_items`, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    removeWishlistItem = (product_id, token) => {
        return axios.deleteMethod(`${this.baseURL}bookstore_user/remove_wishlist_item/${product_id}`, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    getCustomerFeedback = (product_id, token) => {
        return axios.getMethod(`${this.baseURL}bookstore_user/get/feedback/${product_id}`, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }

    postCustomerFeedback = (product_id, data, token) => {
        return axios.postMethod(`${this.baseURL}bookstore_user/add/feedback/${product_id}`, data, { headers: {"x-access-token" : token, "Content-Type": "application/json"} });
    }
    
}