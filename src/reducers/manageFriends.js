export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const arr = state.friends.filter(function(friend) {
                return friend.id !== action.id
            })
           return {friends: arr}
        default:
            return state
    }
}
