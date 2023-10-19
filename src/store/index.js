import { configureStore } from "@reduxjs/toolkit";
import { userReducer, addUser, removeUser } from "./slices/userSlice";
import {
  moviesReducer,
  addNowPlayingMovies,
  addTrailerVideo,
} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export { store, addUser, removeUser, addNowPlayingMovies, addTrailerVideo };
