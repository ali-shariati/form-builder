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
        <div className="relative mb-6 w-full flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 rtl">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={label || ""}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="برچسب را وارد کنید"
                        className="flex-grow p-2 text-sm text-black bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="flex space-x-4 space-x-reverse mt-2 mr-2 lg:mt-0">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 mr-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                        >
                            ذخیره
                        </button>
                        <button
                            onClick={handleRemove}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                        >
                            حذف
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <label className="text-gray-500 text-sm flex ml-2 items-center">
                        <input
                            type="checkbox"
                            checked={field.checked || false}
                            onChange={toggleChecked}
                            className="mr-2 ml-2"
                        />
                        {field.label || "چک‌باکس"}
                    </label>
                    <div className="flex space-x-4 space-x-reverse mt-2 lg:mt-0">
                        <button
                            onClick={startEditing}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                        >
                            ویرایش
                        </button>
                        <button
                            onClick={handleRemove}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                        >
                            حذف
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CheckBoxField;
