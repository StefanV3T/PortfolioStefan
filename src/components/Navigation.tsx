import { NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navigation() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-md">
            <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between h-16 relative">

                {/* Navigation Links */}
                <div className="hidden sm:flex space-x-6">
                    {["Home", "About", "Projects", "Contact", "Blogs"].map((item) => (
                        <NavLink
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-gray-800 dark:text-gray-200 hover:text-blue-500 transition font-medium ${isActive ? "text-blue-500" : ""}`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded text-gray-800 dark:text-gray-200 transition-all"
                >
                    {theme === "dark" ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Button */}
                <button className="sm:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div ref={menuRef} className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 shadow-md p-4 space-y-3">
                    {["Home", "About", "Projects", "Contact", "Blogs"].map((item) => (
                        <NavLink
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="block text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}