"use client";

import React from "react";
import useEditableField from "../../hooks/useEditableField";

const CheckBoxField: React.FC<{ field: any; updateField: any; removeField: any }> = ({
                                                                                         field,
                                                                                         updateField,
                                                                                         removeField,
                                                                                     }) => {
    const { isEditing, label, setLabel, saveLabel, startEditing } = useEditableField({
        initialLabel: field.label || "",
    });

    const handleSave = () => {
        saveLabel(label);
        updateField(field.id, { ...field, label });
    };

    const handleRemove = () => {
        removeField(field.id);
    };

    const toggleChecked = () => {
        updateField(field.id, { ...field, checked: !field.checked });
    };

    return (
        <div className="relative mb-6 w-full flex items-center space-x-4 rtl">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={label || ""}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="برچسب را وارد کنید"
                        className="flex-grow p-2 ml-4 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSave}
                        className="ml-4 mr-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                    >
                        ذخیره
                    </button>
                    <button
                        onClick={handleRemove}
                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                    >
                        حذف
                    </button>
                </>
            ) : (
                <>
                    <label className="text-gray-500 text-sm mr-2 ml-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={field.checked || false}
                            onChange={toggleChecked}
                            className="mr-2 ml-2"
                        />
                        {field.label || "چک‌باکس"}
                    </label>
                    <button
                        onClick={startEditing}
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                    >
                        ویرایش
                    </button>
                    <button
                        onClick={handleRemove}
                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                    >
                        حذف
                    </button>
                </>
            )}
        </div>
    );
};

export default CheckBoxField;