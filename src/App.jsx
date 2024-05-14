import React from "react";
import Read from "./Component/Read";
import Write from "./Component/Write";
import UpdateData from "./Component/UpdateData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Write />} />
          <Route exact path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<UpdateData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
