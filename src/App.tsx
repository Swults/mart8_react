import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mart8 from "./pages/Mart8";
import Flwrs from "./pages/Flwrs";
import Strike from "./pages/Strike";
import Free from "./pages/Free";

import "./styles/mart8.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mart8 />} />
        <Route path="/flwrs" element={<Flwrs />} />
        <Route path="/strike" element={<Strike />} />
        <Route path="/free" element={<Free />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
