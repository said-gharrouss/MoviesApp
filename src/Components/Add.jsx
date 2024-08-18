import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";


function Add() {
    const inputRef = useRef();
    const [results,setResults] = useState();
    const getData = async ()=>{
        const respons  = await fetch(`http://www.omdbapi.com/?s=${inputRef.current.value}&apikey=eb54b3a1`);
        const data = await respons.json();
        const finalResult = data.Search
        setResults(finalResult);
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <section>
            <div className="container">
                <div className="w-[600px] mx-auto">
                    <input type="text" ref={inputRef} placeholder="Search for a movie && anime"
                    className="mt-[60px] bg_primary outline-none border-none w-full py-[8px] px-[10px]
                    rounded-[6px] text-white" onChange={()=>getData()}/>
                    <div className="mt-[20px]">
                        {results?.map((result,key) => (
                            <MovieCard movie={result} key={key}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Add