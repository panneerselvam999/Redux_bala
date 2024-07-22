import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
        const timePeriod = formatDistanceToNow(parseISO(timestamp));
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <div>
            <span>{timeAgo}</span>
        </div>
    );
};

export default TimeAgo;
