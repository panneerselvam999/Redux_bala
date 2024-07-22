import { useSelector } from "react-redux";
import React from "react";
import { selectAllUsers } from "../../store/store";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id === parseInt(userId));

    return (
        <div>
            <span>by {author ? author.userName : "Unknown author"}</span>
        </div>
    );
};
export default PostAuthor;
