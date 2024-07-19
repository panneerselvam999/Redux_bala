// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
// import { postAdded } from "./postsSlice";

// const AddPostForm = () => {
//     const dispatch = useDispatch();
//     const [postTitle, setPostTitle] = useState("");
//     const [postContent, setPostContent] = useState("");

//     const onSavePostClicked = (e) => {
//         e.preventDefault();
//         if (postTitle && postContent) {
//             dispatch(
//                 postAdded({ id: nanoid(), title: postTitle, content: postContent }),
//             );
//         }
//         setPostTitle("")
//         setPostContent("")
//     };

//     return (
//         <div className="mt-5 flex flex-col items-center justify-center border-2 border-black px-10">
//             <h2 className="py-5 text-2xl">Add new post</h2>
//             <form>
//                 <div>
//                     <div>
//                         <label
//                             htmlFor="first-name"
//                             className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
//                         >
//                             Enter title :{" "}
//                         </label>
//                         <input
//                             onChange={(e) => setPostTitle(e.target.value)}
//                             value={postTitle}
//                             name="first-name"
//                             className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <label className="text-gray-700" htmlFor="comment">
//                         Enter content :{" "}
//                     </label>
//                     <textarea
//                         onChange={(e) => setPostContent(e.target.value)}
//                         value={postContent}
//                         className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
//                         id="comment"
//                         placeholder="Enter your comment"
//                         name="comment"
//                         rows="5"
//                         cols="40"
//                     ></textarea>
//                 </div>
//                 <div>
//                     <button
//                         onClick={(e) => onSavePostClicked(e)}
//                         type="submit"
//                         className="inline-flex justify-center rounded border border-transparent bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
//                     >
//                         Add post
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddPostForm;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const onSavePostClicked = (e) => {
        e.preventDefault();
        if (postTitle && postContent) {
            dispatch(postAdded(postTitle, postContent));
        }
        setPostTitle("");
        setPostContent("");
    };

    return (
        <div className="mt-5 flex flex-col items-center justify-center border-2 border-black px-10">
            <h2 className="py-5 text-2xl">Add new post</h2>
            <form>
                <div>
                    <div>
                        <label
                            htmlFor="first-name"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Enter title :{" "}
                        </label>
                        <input
                            onChange={(e) => setPostTitle(e.target.value)}
                            value={postTitle}
                            name="first-name"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="comment">
                        Enter content :{" "}
                    </label>
                    <textarea
                        onChange={(e) => setPostContent(e.target.value)}
                        value={postContent}
                        className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                        id="comment"
                        placeholder="Enter your comment"
                        name="comment"
                        rows="5"
                        cols="40"
                    ></textarea>
                </div>
                <div>
                    <button
                        onClick={(e) => onSavePostClicked(e)}
                        type="submit"
                        className="inline-flex justify-center rounded border border-transparent bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                        Add post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm;
