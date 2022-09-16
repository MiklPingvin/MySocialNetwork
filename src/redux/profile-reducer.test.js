import profileReducer, {addPost} from "./profile-reducer";

test('new post should be added', () => {
    let action=addPost('hello')
    let newState = profileReducer({
        posts: [
            {id: 1, message: 'yo', likesCount: 6},
            {id: 2, message: 'good game', likesCount: 5},
            {id: 3, message: 'hw', likesCount: 10},
            {id: 4, message: '1', likesCount: 7},
            {id: 5, message: 'yyy', likesCount: 5},
            {id: 6, message: 'y', likesCount: 7},
            {id: 7, message: 'yy', likesCount: 0}
        ]
    },action)
    expect(newState.posts.length).toBe(8)
});
