// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     {
//         id: 1,
//         title: "Learning redux toolkit",
//         content: "It's easy",
//     },
//     {
//         id: 2,
//         title: "Web development",
//         content: "Learn web development",
//     },
// ];

// const postsSlice = createSlice({
//     name: "postsSliceName",
//     initialState,
//     reducers: {
//         postAdded: (state, action) => {
//             state.push(action.payload)
//         }
//     },
// });

// export const selectAllPosts = state => state.storePosts
// export const { postAdded } = postsSlice.actions
// export default postsSlice.reducer;



///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    },
                };
            },
        },
    },
});

export const selectAllPosts = (state) => state.storePosts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
