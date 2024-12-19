// src/components/CustomCursor.tsx

import { useEffect, useState } from "react";
import './CustomCursor.css';

const CustomCursor = () => {
    const [cursorSize, setCursorSize] = useState<number>(20); // Default size of the cursor

    useEffect(() => {
        // Function to update the cursor size based on hover state
        const handleMouseEnter = () => {
            setCursorSize(30); // Increase size when hovering over interactive elements
        };

        const handleMouseLeave = () => {
            setCursorSize(20); // Reset size to default when mouse leaves
        };

        // Select all interactive elements and add hover event listeners
        const interactiveElements = [
            'button',
            'a',
            'input',
            'textarea',
            '.interactive', // Add any custom classes if needed
        ];

        // Add event listeners to all interactive elements
        interactiveElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                element.addEventListener("mouseenter", handleMouseEnter);
                element.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        // Update cursor position on mouse move
        const handleMouseMove = (e: MouseEvent) => {
            const cursor = document.querySelector(".cursor") as HTMLElement;
            if (cursor) {
                cursor.style.left = `${e.pageX}px`;
                cursor.style.top = `${e.pageY}px`;
            }
        };

        // Add mousemove event listener
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listeners
        return () => {
            interactiveElements.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((element) => {
                    element.removeEventListener("mouseenter", handleMouseEnter);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                });
            });

            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="cursor"
            style={{ width: `${cursorSize}px`, height: `${cursorSize}px` }}
        ></div>
    );
};

export default CustomCursor;
