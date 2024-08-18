import PropTypes from 'prop-types';
import { useMovieContext } from './Context/GlobalContext';
import * as actions from "./Context/ActionTypes"

function MovieCard({ movie }) {
  const {MovieDispatch}  = useMovieContext();
  const {watchlist} = useMovieContext();
  const {watched} = useMovieContext();

  return (
    <div className="flex gap-[20px] mb-[20px]">
    <div>
        <img className="w-[100px] h-[150px] rounded-[6px]" src={movie.Poster} alt="" />
    </div>
    <div className="flex flex-col justify-between">
        <div>
            <h3 className="text-primary font-semibold text-[20px]">{movie.Title}</h3>
            <span className="text-gray-500">{movie.Year}</span>
        </div>
        <div className="flex gap-[10px]">

            {
            (!watchlist.includes(movie.Poster) && !watched.includes(movie.Poster))
            ?
            <button onClick={() =>  MovieDispatch({type : actions.ADD_MOVIE_TO_WATCHLIST,pyload : movie.Poster})}
            className="py-[8px] px-[20px] bg-[#4CACBC] rounded-[6px] text-white hover:opacity-[0.85]">Add To Watch List</button>
            :
            <button className="py-[8px] px-[20px] bg-[#4CACBC] rounded-[6px] text-white
            hover:opacity-[0.85] pointer-events-none opacity-[0.5]">Add To Watch List</button>
            }

            {
            !watched.includes(movie.Poster)
            ?
            <button onClick={() => MovieDispatch({type : actions.ADD_MOVIE_TO_WATCHED,pyload : movie.Poster})} className="py-[8px] px-[20px] bg-[#4CACBC] rounded-[6px] text-white hover:opacity-[0.85]">Add To Watched</button>
            :
            <button className="py-[8px] px-[20px] bg-[#4CACBC] rounded-[6px] text-white hover:opacity-[0.85] pointer-events-none opacity-[0.5]">Add To Watched</button>
            }
        </div>
    </div>
</div>
  )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard