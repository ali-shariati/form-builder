"use client";
import "./globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        </body>
        </html>
    );
}


