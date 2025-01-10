import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // 引入根组件
import './index.css';  // 引入全局样式
import reportWebVitals from './reportWebVitals';  // 正确导入 reportWebVitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 如果需要，调用 reportWebVitals
reportWebVitals();
