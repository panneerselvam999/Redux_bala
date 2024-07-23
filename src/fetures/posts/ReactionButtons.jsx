import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😯",
        heart: "❤",
        rocket: "🚀",
        coffee: "🍮",
    };

    const ReactionButtonsOut = Object.entries(reactionEmoji).map(
        ([name, emoji]) => (
            <button
                key={name}
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                <span>
                    {emoji}
                    {post.reactions[name]}
                </span>
            </button>
        ),
    );

    return <div className="bg-slate-700 px-3 py-2 rounded-md flex  justify-between text-white">{ReactionButtonsOut}</div>;
};

export default ReactionButtons;
