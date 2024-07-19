import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostLists = () => {
    const getPosts = useSelector(selectAllPosts);
    return (
        <section className=" max-h-[600px] border-2 border-black  overflow-y-scroll">
            <div>
                <h2 className="text-6xl my-5">Posts</h2>
            </div>
            <div className="">
                {getPosts.map((post, index) => (
                    <article
                        key={post.id}
                        className="mx-10 mb-3 rounded-md bg-slate-400 px-3 py-2"
                    >
                        <h3 className="text-3xl font-semibold">
                            {index + 1} : {post.title}
                        </h3>
                        <p>
                            {post.content
                                ? post.content.substring(0, 100)
                                : "No content available"}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PostLists;
