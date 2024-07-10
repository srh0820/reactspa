import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import App3 from './App3Router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App3 />
    </BrowserRouter>
);