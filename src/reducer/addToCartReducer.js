const initialState = {
    clicked : ""
}

function addToCartReducer(state=initialState, action) {
    console.log(action);
    switch(action.type) {
        case "Cart" : 
            return {
                clicked: "Cart"
            }
        default : 
            return state;
    }
}

export default addToCartReducer;