
const INITIAL_STATE = {
    countries:[],
    messages:"",
    isLoading: false
}

export const reducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
        case "GET_COUNTRIES_START": return {...state, isLoading: true, messages: ""}
        case "GET_COUNTRIES_SUCCESS":
            return {...state, countries: action.payload, isLoading: false}
        case "GET_COUNTRIES_ERROR":
            return {...state, messages: action.payload, isLoading: false}
        default: return state;
    }

}