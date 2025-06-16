
export const likePost = (postId) => ({
  type: 'LIKE_POST',
  payload: postId,
});

export const dislikePost = (postId) => ({
  type: 'DISLIKE_POST',
  payload: postId,
});
