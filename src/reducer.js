export const intialState = {
 term: null
}

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_SEARCH_TERM":
            return {
                ...state,
                term:action.term,
            }
        default: 
        return state
    }
}

export default reducer;