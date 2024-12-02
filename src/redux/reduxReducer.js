const reduxReducer = (state, action) => {
    switch (action.type) {
        case "BRAND_DATA_LOAD":
            return {
                ...state,
                brands: [...action.payload],
            };
        case "BRAND_DATA_CREATE":
            return {
                ...state,
                brands:[...state.brands, action.payload]
            }

        default:
            return state;
    }
}

export default reduxReducer;