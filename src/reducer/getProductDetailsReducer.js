const initialState = {
    //data : []
    clicked: ""
}

function getProductDetailsReducer(state=initialState, action) {
    // console.log(action.type);
    // console.log(action.data);
    switch(action.type) {
        case "bookClicked" : 
            return {
                //data: action.data
                clicked: "bookClicked"
            }
        default : 
            return state;
    }
}

export default getProductDetailsReducer;
