import "./globals.css";
import React from 'react';
import WrappedLayout from "@/app/WrappedLayout";
import Footer from "@/components/ui/Footer/Footer";

export const metadata = {
    title: "My App",
    description: "An app with page transitions",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
            <WrappedLayout children={children} />
            <Footer />
        </body>
        </html>
    );
}
