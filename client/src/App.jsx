import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Chat from "./components/chat/chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
