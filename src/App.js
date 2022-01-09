import { useContext } from "react";
import { Intro, About, Contact, ProductList, Toggle } from "./components";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#121212" : "white",
        color: darkMode ? "white" : "#121212",
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  );
};

export default App;
