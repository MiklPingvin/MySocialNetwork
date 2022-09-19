import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "83d67ef6-e424-45c7-be42-2016d0db26d1"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
            return response.data
        })
    },
    follow(userID){
        return instance.post(`/follow/${userID}`)
            .then(response => {
                return response.data
            }
        )
    },
    unfollow(userID){
        return instance.delete(`follow/${userID}`).then(response=>{
            return response.data
        })}
}

export const profileAPI={
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return response.data
        })
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`).then(response => {
            return response.data
        })
    },
    updateStatus(status){
        return instance.put('/profile/status',{status:status})
    }
}

export const authAPI={
    authMe(){
    return instance.get('/auth/me').then(response=>{
        return response.data
    })
},
    login(email, password, rememberMe = false){
        return instance.post('/auth/login',{email, password, rememberMe, captcha:true})
    },
    loginOut(){
        return instance.delete('/auth/login')
    }

}