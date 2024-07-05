import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Child'; // 상대경로는 모두 src 폴더에서 찾기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App msg="메세지" num="10" cls="bg-dark fixed-top text-white"/>
);