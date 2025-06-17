
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default PostComponent;
