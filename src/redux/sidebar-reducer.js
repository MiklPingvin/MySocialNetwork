let initialState = {
    friends: [
        {
            name: 'Sasha',
            id: 1,
            ava_src: 'https://coolsen.ru/wp-content/uploads/2021/09/55-619x600.jpg'
        },
        {
            name: 'Fil',
            id: 2,
            ava_src: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
        {
            name: 'Kate',
            id: 3,
            ava_src: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg'
        },
    ]

}

const sidebarReducer = (state = initialState, action) => {
    return {...state}
}

export default sidebarReducer