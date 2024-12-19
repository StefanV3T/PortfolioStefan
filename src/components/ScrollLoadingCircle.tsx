// src/components/ScrollLoadingCircle.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollLoadingCircle = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Calculate the scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrollPosition / documentHeight) * 100;
            setScrollPercentage(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="fixed bottom-4 right-4 p-4 flex justify-center items-center"
            style={{ width: '80px', height: '80px' }}
        >
            <svg
                className="transform rotate-90"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="transparant"
                    strokeWidth="6"
                    fill="none"
                />
                <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset={220 - (220 * scrollPercentage) / 100}  // Adjust the stroke offset based on scroll progress
                    transition={{ duration: 0.1 }}
                />
            </svg>
        </motion.div>
    );
};

export default ScrollLoadingCircle;
