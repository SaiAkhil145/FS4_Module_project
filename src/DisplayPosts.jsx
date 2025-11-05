import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";
import { useNavigate } from "react-router-dom";

const DisplayPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function goToPost(id) {
    navigate(`/post/${id}`);
  }

  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="post-container">
        {posts &&
          posts.map((item) => (
            <div
              key={item.id}
              className="post-card"
              onClick={() => goToPost(item.id)}
            >
              <img
                src={`https://picsum.photos/200?random=${item.id}`}
                alt="Random"
              />
              <p>
                <b>User ID:</b> {item.userId}
              </p>
              <p>
                <b>Post ID:</b> {item.id}
              </p>
              <div
                className="read-container"
                onClick={(e) => e.stopPropagation()}
              >
                <p>
                  <b>Title :</b> {item.title.slice(0, 20) + "..."}
                </p>
              </div>
              <div
                className="read-container"
                onClick={(e) => e.stopPropagation()}
              >
                <p>
                  <b>Body :</b> {item.body.slice(0, 30) + "..."}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayPosts;
