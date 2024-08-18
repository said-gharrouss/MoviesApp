import { createContext, useContext, useReducer ,useEffect} from "react";
import { reducer } from "./reducer";
import PropTypes from 'prop-types';

const insitialState = {
    watchlist : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = createContext(insitialState);

function ContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, insitialState)

    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
        localStorage.setItem("watched",JSON.stringify(state.watched));
    },[state])

    return (
        <GlobalContext.Provider value={{
            watchlist : state.watchlist,
            watched : state.watched,
            MovieDispatch : dispatch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

ContextProvider.propTypes = {
    children : PropTypes.node.isRequired,
}

export default ContextProvider;

export const useMovieContext = ()=>{
    return useContext(GlobalContext)
}

