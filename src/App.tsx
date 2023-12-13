import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

        <ThemeSwitch />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
