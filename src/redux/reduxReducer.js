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
                brands: [...state.brands, action.payload]
            }
        case "TAG_DATA_LOAD":
            return {
                ...state,
                tags: [...action.payload],
            }

        case "TAG_DATA_SHOW":
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }

        default:
            return state;
    }
}

export default reduxReducer;