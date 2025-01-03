import { useState } from "react";

interface UseEditableFieldProps {
    initialLabel: string; // Initial label value for the editable field
}

/**
 * Custom hook to manage the state of an editable field.
 * @param initialLabel - The initial label value.
 * @returns An object containing the current state and methods for managing the field.
 */
const useEditableField = ({ initialLabel }: UseEditableFieldProps) => {
    const [isEditing, setIsEditing] = useState(true); // Whether the field is in edit mode
    const [label, setLabel] = useState(initialLabel); // Current label value

    /**
     * Enable edit mode.
     */
    const startEditing = () => setIsEditing(true);

    /**
     * Save the updated label and exit edit mode.
     * @param newLabel - The new label value.
     */
    const saveLabel = (newLabel: string) => {
        setLabel(newLabel);
        setIsEditing(false);
    };

    return {
        isEditing, // Current edit mode state
        label, // Current label value
        startEditing, // Function to start editing
        saveLabel, // Function to save the label
        setLabel, // Function to directly set the label
    };
};

export default useEditableField;
