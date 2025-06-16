
const initialState = {
  posts: [
    { id: 1, title: 'React is awesome', likes: 0, dislikes: 0 },
    { id: 2, title: 'Redux makes state predictable', likes: 0, dislikes: 0 },
  ],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, likes: post.likes + 1 }
            : post
        ),
      };
    case 'DISLIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, dislikes: post.dislikes + 1 }
            : post
        ),
      };
    default:
      return state;
  }
};
