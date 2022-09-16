import {createSelector} from "reselect";

export const getUsersPage=(state)=>{
    return state.usersPage
}

export const  getUsersPageSelector = createSelector(getUsersPage, (users)=>{
    return users
})