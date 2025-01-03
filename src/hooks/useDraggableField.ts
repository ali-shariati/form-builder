import { useDrag } from "react-dnd";

/**
 * Custom hook to make a field draggable.
 * @param type - The type of the draggable item. Must match the `accept` type in useDropZone.
 * @param data - The data to be attached to the draggable item.
 * @returns An object containing the drag reference and the dragging state.
 */
const useDraggableField = (type: string, data: any) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type, // This value must match the `accept` type in useDropZone
        item: data,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return { drag, isDragging };
};

export default useDraggableField;

