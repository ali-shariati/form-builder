"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically load components without server-side rendering
const FieldPalette = dynamic(() => import("../components/FieldPalette"), { ssr: false });
const FormCanvas = dynamic(() => import("../components/FormCanvas"), { ssr: false });

export default function Home() {
    return (
        <div className="flex h-screen bg-gray-50 text-gray-800 font-YekanBakh">
            {/* Right section: Tools */}
            <div className="w-1/6 bg-white shadow-md border-r p-4">
                <h2 className="text-lg font-semibold mb-4">ابزارها</h2>
                <FieldPalette />
            </div>

            {/* Center section: Form */}
            <div className="flex-grow p-8">
                <h2 className="text-lg font-semibold mb-4 text-center">فرم خود را اینجا بسازید</h2>
                <FormCanvas />
            </div>

            {/* Left section: Settings */}
            <div className="w-1/6 bg-white shadow-md border-l p-4">
                <h2 className="text-lg font-semibold mb-4">تنظیمات</h2>
                <p className="text-sm text-gray-600">برای تنظیم فیلدها، ابتدا آن را انتخاب کنید.</p>
            </div>
        </div>
    );
}
