import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HWApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
);