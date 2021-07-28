const initialState = {
    data : []
}

function addToCartReducer(state=initialState, action) {
    console.log(action.type);
    console.log(action.data);
    switch(action.type) {
        case "bookClicked" : 
            return {
                data: action.data
            }
        default : 
            return state;
    }
}

export default addToCartReducer;

// const initialState = {
//     clicked : ""
// }
// function addToCartReducer(state=initialState, action) {
//     switch(action.type) {
//         case "Cart" : 
//             return {
//                 clicked: "Cart"
//             }
//         default : 
//             return state;
//     }
// }
