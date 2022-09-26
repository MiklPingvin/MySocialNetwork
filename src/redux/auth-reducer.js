import {authAPI, profileAPI, securityAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    isFetching: false,
    captchaUrl: null
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
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
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
const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA,
    captchaUrl: captchaUrl
})


export const authUserWithPhoto = () => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    return response
}

export const login = (email, pass, rememberMe, captcha, setStatus) => async (dispatch) => {
    debugger
    let response = await authAPI.login(email, pass, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authUserWithPhoto())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        setStatus(response.data.messages)
    }
}
export const loginOut = () => async (dispatch) => {
    let response = await authAPI.loginOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha()
    dispatch(setCaptcha(response.url))

}

export default authReducer