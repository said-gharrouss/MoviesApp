import { useMovieContext } from "./Context/GlobalContext"
import * as actions from "./Context/ActionTypes"

function WatchList() {
  const {watchlist} = useMovieContext();
  const {MovieDispatch} = useMovieContext();

  const handleMouseEnter = (e) => {
    e.currentTarget.children[1].classList.remove("hidden");
  }
  const handleMouseLeave = (e)=>{
    e.currentTarget.children[1].classList.add("hidden");
  }

  return (
    <section className="pb-[20px]">
      <div className="container mt-[30px]">
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-[30px] text-primary">My Watchlist</h2>
          <div className="bg-[#4CACBC] text-white px-[15px] py-[5px] rounded-[30px]">{watchlist.length} {watchlist.length == 1 ? "Movie" : "Movies"}</div>
        </div>
        <div className="flex gap-[23px] mt-[20px] flex-wrap ">
            {watchlist?.map((poster,key)=> (
              <div key={key} className="rounded-[4px] overflow-hidden shadow-[0px_2px_8px_0px_#B6BBC4] relative"
              onMouseEnter ={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
                  <img  src={poster} alt="img" className="w-[170px] h-[250px]"/>
                  <div className="absolute z-10 text-white bottom-[30px] left-[50%]
                  translate-x-[-50%] text-[25px] hidden">
                    <span className="mr-[20px] cursor-pointer hover:text-red-500"
                    onClick={()=>MovieDispatch({type : actions.REMOVE_MOVIE_FROM_WATCHLIST, pyload : poster})}><i className="fa-solid fa-xmark"></i></span>
                    <span className="cursor-pointer hover:text-green-500"
                    onClick={()=>MovieDispatch({type : actions.MOVE_TO_WATCHED, pyload : poster})}><i className="fa-regular fa-eye"></i></span>
                  </div>
              </div>
            ))}
            {watchlist.length == 0 ? 
            <div className="text-[50px] mx-auto text-gray-300 font-bold">No Movies in your list,add some!</div> : ""}
        </div>
      </div>
    </section>
  )
}
export default WatchList