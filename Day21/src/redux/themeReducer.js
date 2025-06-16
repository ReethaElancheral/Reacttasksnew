const initialState = {
  theme: 'light',
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}
