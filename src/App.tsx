import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Background from "./components/Background";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App: React.FC = () => {
    return (
        <>
            <Background />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
