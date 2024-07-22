import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
    const getPosts = useSelector(selectAllPosts);
    return (
        <section className=" max-h-[600px] border-2 border-black  overflow-y-scroll">
            <div>
                <h2 className="text-6xl my-5">Posts</h2>
            </div>
            <div className="flex  flex-col-reverse">
                {getPosts.map((post, index) => (
                    <article
                        key={post.id}
                        className="mx-10 mb-3 rounded-md bg-slate-400 px-3 py-2"
                    >
                        <h3 className="text-3xl font-semibold">
                            {index + 1} : {post.title}
                        </h3>
                        <p>
                            {post.content.substring(0, 100)}
                        </p>
                        <div>
                            {/* {console.log("Rendering PostAuthor with userId: ", post.userId)} */}
                            <PostAuthor userId={post.userId} /> 
                            <TimeAgo timestamp={post.date} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PostLists;
