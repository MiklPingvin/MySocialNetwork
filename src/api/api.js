import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4922166c-6fab-4b9b-9321-7b9f59f3ea78"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userID) {
        return instance.post(`/follow/${userID}`)
            .then(response => {
                    return response.data
                }
            )
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return response.data
        })
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put('/profile/status', {status: status})
    },
    updateProfile(profile) {
        return instance.put('/profile', profile)
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    authMe() {
        return instance.get('/auth/me').then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha: true})
    },
    loginOut() {
        return instance.delete('/auth/login')
    }

}