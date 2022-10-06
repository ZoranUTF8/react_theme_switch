import { useState, createContext } from "react";
import "./App.css";
import Form from "./Form";
import Switch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === "light" ? "light mode" : "dark mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
