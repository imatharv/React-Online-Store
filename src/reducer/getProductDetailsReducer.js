const initialState = {
    data : []
}

function getProductDetailsReducer(state=initialState, action) {
    // console.log(action.type);
    // console.log(action.data);
    switch(action.type) {
        case "bookClicked" : 
            return {
                data: action.data
            }
        default : 
            return state;
    }
}

export default getProductDetailsReducer;
