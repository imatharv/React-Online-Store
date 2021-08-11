const initialState = {
    //cartItems : [],
    clicked: ""
}

function cartItemsReducer(state=initialState, action) {
    // console.log(action.type);
    // console.log(action.data);
    switch(action.type) {
        case "addToCartClicked" : 
            return {
                //cartItems: action.data;
                clicked: "addToCartClicked"
            }
        case "removeFromCartClicked" : 
            return {
                //cartItems: action.data;
                clicked: "removeFromCartClicked"
            }
        default : 
            return state;
    }
}

export default cartItemsReducer;