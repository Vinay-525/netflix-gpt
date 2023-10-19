import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const res = await data.json();
    console.log("RES", res);
    const filteredVideos = res?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : res?.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
