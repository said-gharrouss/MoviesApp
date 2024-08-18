import * as actions from "./ActionTypes"
export const reducer = (state,action)=>{
    switch (action.type){
        case actions.ADD_MOVIE_TO_WATCHLIST : 
            return {
                ...state,
                watchlist : [action.pyload,...state.watchlist]
            }
        case actions.REMOVE_MOVIE_FROM_WATCHLIST : 
            return {
                ...state,
                watchlist : state.watchlist.filter((poster) => poster !== action.pyload)
            }
        case actions.MOVE_TO_WATCHED : 
            return {
                ...state,
                watchlist : state.watchlist.filter((poster) => poster !== action.pyload),
                watched : [action.pyload,...state.watched]
            }
        case actions.ADD_MOVIE_TO_WATCHED : 
            return {
                ...state,
                watched : [action.pyload,...state.watched]
            }
        case actions.REMOVE_MOVIE_FROM_WATCHED : 
            return {
                ...state,
                watched : state.watched.filter((poster) => poster !== action.pyload)
            }
        case actions.MOVE_TO_WATCHLIST : 
            return{
                ...state,
                watched : state.watched.filter((poster) => poster !== action.pyload),
                watchlist : [action.pyload,...state.watchlist]
            }
        default : return state
    }
}