import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";  // 首页组件
import DetailsPage from "./pages/DetailsPage";  // 详情页组件

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* 首页路由 */}
        <Route path="/pokemon/:id" element={<DetailsPage />} />  {/* 详情页路由，带有 id 参数 */}
      </Routes>
    </Router>
  );
}

export default App;
