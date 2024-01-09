import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "animate.css/animate.min.css";
import App from './App';
import {AnimationProvider} from "./utils/AnimationContext";
import {BrowserRouter} from "react-router-dom";
import {PreferencesProvider} from "./utils/PreferencesContext";
import {ServerDataProvider} from "./utils/ServerDataContext";

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

console.log("%cWhat are you trying to find there? All sources are available on https://github.com/krvvko", "color:#FCFCFCFF; border: 2px solid #4981e8; background: #111111; padding: 6px 15px; font-size: 0.9rem; border-radius: 6px;");

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