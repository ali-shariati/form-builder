import { useDrop } from "react-dnd";

/**
 * Custom hook to create a drop zone for draggable items.
 * @param accept - The type of items this drop zone accepts.
 * @param onDrop - Callback function triggered when an item is dropped.
 * @returns An object containing the drop reference and the state indicating if an item is over the drop zone.
 */
const useDropZone = (accept: string, onDrop: (item: any) => void) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept, // Type of draggable items this drop zone accepts
        drop: (item) => {
            if (onDrop) {
                onDrop(item); // Invoke the callback to handle the dropped item
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(), // Check if an item is currently over the drop zone
        }),
    }));

    return { drop, isOver };
};

export default useDropZone;
