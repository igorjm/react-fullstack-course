export default function(state = {}, action) {
    
    switch(action.type) {
        case 'MOVIE_LIST':
            return {...state, movies:action.payload}
        default:
            return state
    }

}