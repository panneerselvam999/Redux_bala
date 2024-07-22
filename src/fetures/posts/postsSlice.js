
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Learning redux toolkit",
        content: "It's easy",
    },
    {
        id: 2,
        title: "Web development",
        content: "Learn web development",
    },
];

const postsSlice = createSlice({
    name: "postsSliceName",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    },
                };
            },
        },
    },
});

export const selectAllPosts = (state) => state.storePosts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
