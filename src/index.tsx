import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "animate.css/animate.min.css";
import App from './App';
import {AnimationProvider} from "./utils/AnimationContext";
import {BrowserRouter} from "react-router-dom";
import {ReducedMotionProvider} from "./utils/ReducedMotionContext";

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

console.log(`rendered ${Date.now().toLocaleString()}`)

root.render(
    <BrowserRouter>
        <ReducedMotionProvider>
            <AnimationProvider>
                <App/>
            </AnimationProvider>
        </ReducedMotionProvider>
    </BrowserRouter>
);