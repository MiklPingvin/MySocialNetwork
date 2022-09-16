import {authUserWithPhoto} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized : true
            }
        }
        default:
            return state
    }
}

export const initializingSuccess=()=>({type: SET_INITIALIZED})


export const initializeApp=()=>(dispatch)=>{
    let promise= dispatch(authUserWithPhoto())
    Promise.all([promise]).then(()=>{
        dispatch(initializingSuccess())
    })

}

export default appReducer