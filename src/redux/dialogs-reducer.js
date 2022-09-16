const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    message: action.text,
                    is_my: true
                }]
            }
        default:
            return state;
    }
}

export const addNewMessage = (text) => ({
    type: SEND_MESSAGE,
    text: text
})
export default dialogsReducer