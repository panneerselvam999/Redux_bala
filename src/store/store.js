import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fetures/counter/counterSlice";
import postsReducer from "../fetures/posts/postsSlice";
import usersReducer from "../fetures/users/usersSlice";

export const store = configureStore({
    reducer: {
        storeCounter: counterReducer,
        storePosts: postsReducer,
        storeUsers: usersReducer
    },
});
