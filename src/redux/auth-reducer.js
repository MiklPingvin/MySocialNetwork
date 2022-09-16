import {authAPI, profileAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        smallPhoto: null
    },
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                isAuth: action.isAuth,
                data: action.data
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth, smallPhoto) => ({
    type: SET_USER_DATA,
    isAuth: isAuth,
    data: {id, email, login, smallPhoto}
})

export const authUserWithPhoto = () => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        let profile = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, true, profile.photos.small))
    }
    return response
}

export const login = (email, pass, rememberMe, setStatus) => async (dispatch) => {
    let response = await authAPI.login(email, pass, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authUserWithPhoto())
    } else {
        setStatus(response.data.messages)
    }
}
export const loginOut = () => async (dispatch) => {
    let response = await authAPI.loginOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null))
    }
}
export default authReducer