import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'yo', likesCount: 6},
                {id: 2, message: 'good game', likesCount: 5},
                {id: 3, message: 'hw', likesCount: 10},
                {id: 4, message: '1', likesCount: 7},
                {id: 5, message: 'yyy', likesCount: 5},
                {id: 5, message: 'y', likesCount: 7},
                {id: 5, message: 'yy', likesCount: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andreu'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Vika'}
            ],
            messages: [
                {id: 1, message: 'yo', is_my: true},
                {id: 2, message: 'ppp'},
                {id: 3, message: 'hw', is_my: true},
                {id: 4, message: '1', is_my: true},
                {id: 5, message: 'yyyssss'}
            ],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                {name: 'Sasha', ava_src: 'https://coolsen.ru/wp-content/uploads/2021/09/55-619x600.jpg'},
                {
                    name: 'Fil',
                    ava_src: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
                },
                {name: 'Kate', ava_src: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'},
            ]
        }
    },
    _callSubscriber() {
        console.log('Change')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.sideBar=sidebarReducer(this._state.sideBar,action)
        this._callSubscriber()
    }
}
export default store