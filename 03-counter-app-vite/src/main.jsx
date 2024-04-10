import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HWApp';
import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 }/>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title="Hola, soy Juan Diego"/> */}
    </React.StrictMode>
);