"use client";

import React, { useState } from "react";
import useDropZone from "../hooks/useDropZone";
import TextField from "./fields/TextField";
import CheckBoxField from "./fields/CheckBoxField";

const FormCanvas: React.FC = () => {
    const [fields, setFields] = useState<any[]>([]);

    // Add a new field
    const addField = (field: any) => {
        const newField = { ...field, id: Date.now() };
        setFields((prevFields) => [...prevFields, newField]);
    };

    // Update a field
    const updateField = (id: number, updatedField: any) => {
        setFields((prevFields) =>
            prevFields.map((field) => (field.id === id ? updatedField : field))
        );
    };

    // Remove a field
    const removeField = (id: number) => {
        setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    // Save the form as JSON
    const saveFormAsJson = () => {
        const formJson = JSON.stringify(fields, null, 2);
        console.log("Form JSON:", formJson);
        alert("فرم ذخیره شد. خروجی JSON را در کنسول بررسی کنید!");

    };

    const { drop, isOver } = useDropZone("FIELD", addField);

    return (
        <div>
            <div
                ref={drop}
                className={`min-h-[400px] p-6 border-2 rounded-lg bg-white shadow-md ${
                    isOver ? "border-blue-400 bg-blue-50" : "border-gray-300"
                }`}
            >
                {fields.length === 0 ? (
                    <p className="text-gray-500 text-center">فیلدها را اینجا رها کنید</p>
                ) : (
                    fields.map((field) => {
                        if (field.type === "text") {
                            return (
                                <TextField
                                    key={field.id}
                                    field={field}
                                    updateField={updateField}
                                    removeField={removeField}
                                />
                            );
                        } else if (field.type === "checkbox") {
                            return (
                                <CheckBoxField
                                    key={field.id}
                                    field={field}
                                    updateField={updateField}
                                    removeField={removeField}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </div>

            {/* Save button */}
            <div className="mt-4 text-center">
                <button
                    onClick={saveFormAsJson}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                >
                    ذخیره فرم
                </button>
            </div>
        </div>
    );
};

export default FormCanvas;
