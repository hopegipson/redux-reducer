export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            //const found = state.friends.findIndex(friend => friend.id === action.id) 
            const arr = state.friends.filter(function(friend) {
                return friend.id !== action.id
            })
           // const end = found + 1
           // let friendsRemove = [state.friends.slice(found, 1)]
           // console.log(friendsRemove)
           return {friends: arr}

           // return {friends: [state.friends.slice!(found, found+1)]}
        default:
            return state
    }
}
