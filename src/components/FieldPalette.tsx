"use client";

import React from "react";
import useDraggableField from "../hooks/useDraggableField";

const FieldItem: React.FC<{ type: string; label: string }> = ({ type, label }) => {
    const { drag, isDragging } = useDraggableField("FIELD", { type }); // Dragging functionality for "FIELD" type

    return (
        <div
            ref={drag}
            className={`p-3 border rounded-md shadow-md cursor-grab text-sm ${
                isDragging ? "bg-gray-200 opacity-50" : "bg-white"
            }`}
        >
            {label}
        </div>
    );
};

const FieldPalette: React.FC = () => {
    return (
        <div className="p-4 border rounded-md bg-gray-50 shadow w-full">
            <h3 className="text-lg font-semibold mb-4">فیلدها</h3>
            <FieldItem type="text" label="فیلد متنی" />
            <FieldItem type="checkbox" label="چک‌باکس" />
        </div>
    );
};

export default FieldPalette;
