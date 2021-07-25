export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (window.sessionStorage.getItem("accessToken")) {
        return true;
    } else {
        return false;
    }
}