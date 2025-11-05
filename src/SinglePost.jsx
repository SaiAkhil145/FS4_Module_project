import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { id } = useParams();
  let filteredPost = posts.find((item) => item.id === Number(id));

  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!filteredPost) {
    return <p>Post not found</p>;
  }
  return (
    <div>
      <h3 className="heading">{`Details Page For Post With User ID ${filteredPost.userId}`}</h3>
      <div className="post-container single">
        <div className="post-card singleCard">
          <img className="single-img" src={`https://picsum.photos/200?random=${filteredPost.id}`} alt="Random" />
          <p>
            <b>Post ID:</b> {filteredPost.id}
          </p>
          <p>
            <b>Title: </b> {filteredPost.title}
          </p>
          <p>
            <b>Body: </b> {filteredPost.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
