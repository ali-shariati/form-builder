import React, { createContext, useContext, useState } from "react";

interface Field {
    id: number; // Unique identifier for the field
    type: string; // Type of the field (e.g., text, checkbox)
    label: string; // Label for the field
}

interface FormContextType {
    fields: Field[]; // Array of all fields in the form
    addField: (field: Field) => void; // Function to add a new field
    updateField: (id: number, updatedField: Field) => void; // Function to update an existing field
}

// Create a context for the form
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider component for the form context
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fields, setFields] = useState<Field[]>([]);

    // Add a new field to the form
    const addField = (field: Field) => {
        setFields((prev) => [...prev, field]);
    };

    // Update an existing field in the form
    const updateField = (id: number, updatedField: Field) => {
        setFields((prev) => prev.map((field) => (field.id === id ? updatedField : field)));
    };

    return (
        <FormContext.Provider value={{ fields, addField, updateField }}>
            {children}
        </FormContext.Provider>
    );
};

// Hook to use the form context
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};
