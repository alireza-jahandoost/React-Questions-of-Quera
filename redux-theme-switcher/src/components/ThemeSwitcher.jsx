import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { THEME_TYPE } from "../constants";
import { setTheme } from "../store/actions";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on redux state
  const themeMode = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    if (themeMode === THEME_TYPE.LIGHT) {
      dispatch(setTheme(THEME_TYPE.DARK));
    } else {
      dispatch(setTheme(THEME_TYPE.LIGHT));
    }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
