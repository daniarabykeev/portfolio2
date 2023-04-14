import React, { useEffect } from "react";
import "./PostsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/posts/PostsSlice";

function PostsPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="posts-page">
      <div>
        <h1>PostsPage</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {posts?.map((post) => {
            return (
              <div>
                <div key={post.id} className="posts-card">
                  <h3>{post.title}</h3>
                  <h4>{post.body}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
