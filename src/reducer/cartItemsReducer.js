const initialState = {
    cartItems : []
}

function cartItemsReducer(state=initialState, action) {
    console.log(action.type);
    console.log(action.data);
    switch(action.type) {
        case "totalCartItems" : 
            return {
                cartItems: action.data
            }
        default : 
            return state;
    }
}

export default cartItemsReducer;