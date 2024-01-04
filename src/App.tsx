import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Background from "./components/Background";

const App: React.FC = () => {
    return (
        <>
            <Background />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
