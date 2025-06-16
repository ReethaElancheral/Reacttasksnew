import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const styles = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={styles}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
