import "./globals.css";
import React from 'react';
import WrappedLayout from "@/app/WrappedLayout";
import Footer from "@/components/ui/Footer/Footer";
import BackgroundWrapper from "@/components/logic/BackgroundWrapper/BackgroundWrapper";
import Header from "@/components/ui/Header/Header";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header />
        <BackgroundWrapper />
        <WrappedLayout children={children}/>
        <Footer />
        </body>
        </html>
    );
}
