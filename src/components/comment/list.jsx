import React from "react";
import { CommentItem } from "./commentItem";

export function CommentList({ comments }) {
  if (!comments.length) {
    return (
      <div style={{ fontSize: "24px" }} className="text-center">
        No Review
      </div>
    );
  }
  return (
    <>
      <ul className="list-group list-group-flush">
        {comments.map((comment, index) => (
          <li className="list-group-item" key={index}>
            <CommentItem {...comment} />
          </li>
        ))}
      </ul>
    </>
  );
}
