import React from "react";
import { App_Header } from "./components/header/header";
import "./App.css";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="container">
      <App_Header></App_Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        {/* <Footer></Footer> */}
      </main>
    </div>
  );
}

export default App;
