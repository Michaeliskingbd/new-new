import React from "react";

const Post = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Review : {props.review}</p>
    </div>
  );
};

export default Post;
