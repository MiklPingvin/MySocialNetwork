import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'yo', likesCount: 6},
        {id: 2, message: 'good game', likesCount: 5},
        {id: 3, message: 'hw', likesCount: 10},
        {id: 4, message: '1', likesCount: 7},
        {id: 5, message: 'yyy', likesCount: 5},
        {id: 6, message: 'y', likesCount: 7},
        {id: 7, message: 'yy', likesCount: 0}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 8,
                    message: action.newPostText,
                    likesCount: 0
                }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export const getUserProfile = (userID) => async (dispatch) => {
    dispatch(setUserProfile(await profileAPI.getProfile(userID)))

}
export const getUserStatus = (userID) => async (dispatch) => {
            dispatch(setUserStatus(await profileAPI.getStatus(userID)))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
}

export default profileReducer