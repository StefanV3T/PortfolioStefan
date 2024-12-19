import { useEffect, useState } from "react";
import './CustomCursor.css';

const CustomCursor = () => {
    const [cursorSize, setCursorSize] = useState<number>(20);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useEffect(() => {
        const checkDeviceType = () => {
            if (window.innerWidth < 768) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        };

        checkDeviceType();

        window.addEventListener("resize", checkDeviceType);

        return () => {
            window.removeEventListener("resize", checkDeviceType);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseEnter = () => {
            setCursorSize(30);
        };

        const handleMouseLeave = () => {
            setCursorSize(20);
        };


        const interactiveElements = [
            'button',
            'a',
            'input',
            'textarea',
        ];

        interactiveElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                element.addEventListener("mouseenter", handleMouseEnter);
                element.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        const handleMouseMove = (e: MouseEvent) => {
            const cursor = document.querySelector(".cursor") as HTMLElement;
            if (cursor) {
                cursor.style.left = `${e.pageX}px`;
                cursor.style.top = `${e.pageY}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

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
    }, [isDesktop]);

    if (!isDesktop) {
        document.body.style.cursor = "default";
        return null;
    }

    return (
        <div
            className="cursor"
            style={{ width: `${cursorSize}px`, height: `${cursorSize}px` }}
        ></div>
    );
};

export default CustomCursor;
