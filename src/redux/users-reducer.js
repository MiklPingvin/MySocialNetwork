import {usersAPI} from "../api/api";
import {UpdateObjectInArray} from "../unit/object-helpers";

const FOLLOWING = 'FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWING:
            return {
                ...state,
                users: UpdateObjectInArray(state.users, action.userId, 'id', {followed: action.followed})
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

//ActionCreator
export const following = (userId, followed) => ({type: FOLLOWING, userId, followed})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setToggleFollowingInProgress = (userId, followingInProgress) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    userId,
    followingInProgress
})

//Thunk-очки
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setToggleFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
}

export const userFollowing = (id, followed) => {
    return async (dispatch) => {
        dispatch(setToggleFollowingInProgress(id, true))
        let response = followed ? await usersAPI.follow(id) : await usersAPI.unfollow(id)
        if (response.resultCode === 0) {
            dispatch(following(id, followed))
        }
        dispatch(setToggleFollowingInProgress(id, false))
    }
}

export default usersReducer;