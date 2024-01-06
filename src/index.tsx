import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "animate.css/animate.min.css";
import App from './App';
import {AnimationProvider} from "./utils/AnimationContext";
import {BrowserRouter} from "react-router-dom";
import {PreferencesProvider} from "./utils/PreferencesContext";
import {ServerDataProvider} from "./utils/ServerDataContext";

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

console.log(`Rendered ${Date.now().toLocaleString()}`)

root.render(
    <BrowserRouter>
        <ServerDataProvider>
            <PreferencesProvider>
                <AnimationProvider>
                    <App/>
                </AnimationProvider>
            </PreferencesProvider>
        </ServerDataProvider>
    </BrowserRouter>
);