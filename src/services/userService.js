import AxiosService from "./axiosService";

const axios = new AxiosService();

export default class UserService {
    baseURL = "https://new-bookstore-backend.herokuapp.com/";

    registration = (data) => {
        return axios.postMethod(`${this.baseURL}bookstore_user/registration`, data);
    }

    login = (data) => {
        return axios.postMethod(`${this.baseURL}bookstore_user/login`, data);
    }
}