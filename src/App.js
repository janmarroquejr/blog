import React from "react";
import Navbar from "./components/Navbar/index";
import Post from "./components/Post/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Post />
      </main>
    </div>
  );
}

export default App;
