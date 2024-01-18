import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../common/Groups/Comment";
import AddComment from "../common/Inputs/AddComment";

const Comments: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => setComments(response.data));
  }, [postId]);

  return (
    <div>
      <AddComment />
      <h1 className='comment-list-name'>Comments</h1>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))}
    </div>
  );
};

export default Comments;
