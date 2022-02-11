import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import NameBox from "./components/NameBox";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Styles from "./data/Styles";

// No need to change *return* part in both StyleTag and App components
// You have to set themeMode based on redux state

const StyleTag = () => {
  const themeMode = useSelector((state) => state.theme);
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

function App() {
  return (
    <>
      <StyleTag />
      <NameBox />
      <ThemeSwitcher />
    </>
  );
}

export default App;
