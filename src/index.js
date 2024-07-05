import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Intro'; // 상대경로는 모두 src 폴더에서 찾기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);