import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Portfolio</div>} />
          <Route path="/count" element={<Button onClick={() => setCount(count + 1)}>Count: {count}</Button>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
