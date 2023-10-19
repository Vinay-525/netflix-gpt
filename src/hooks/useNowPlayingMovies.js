import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIES_URL } from "../utils/contants";
import { addNowPlayingMovies } from "../store";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMoviesFromTMDB = async () => {
    const data = await fetch(TMDB_MOVIES_URL, API_OPTIONS);
    const res = await data.json();
    console.log(res);
    dispatch(addNowPlayingMovies(res.results));
  };

  useEffect(() => {
    fetchMoviesFromTMDB();
  }, []);
};

export default useNowPlayingMovies;
