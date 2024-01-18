import React, { useEffect, useState } from "react";
import { COMMENT_API_URL } from "../Utils/constant";
import Comment from "./Comment";

const CommentBox = ({ id, commentCount }) => {
  const [commentList, setCommentList] = useState([]);

  const getCommentList = async () => {
    const data = await fetch(COMMENT_API_URL + id);
    const json = await data.json();
    setCommentList(json?.items);
  };

  useEffect(() => {
    getCommentList();
    // eslint-disable-next-line
  }, [id]);

  if (id) {
    return (
      <div className="my-4 rounded-lg">
        <h1 className="font-bold text-xl p-3">{commentCount} Comments</h1>
        {commentList?.map((item) => {
          return <Comment key={item.id} snippet={item?.snippet} />;
        })}
      </div>
    );
  }
};

export default CommentBox;
