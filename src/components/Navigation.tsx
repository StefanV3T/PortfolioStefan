import { NavLink } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navigation() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md flex items-center justify-between h-16 px-4">
                <div className="flex items-center justify-between w-full max-w-screen-sm mx-auto">
                    <button
                        className="block sm:hidden px-2 py-1 text-gray-800 dark:text-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                    <NavigationMenu>
                        <NavigationMenuList
                            className={`${isOpen ? "block" : "hidden"
                                } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 absolute sm:static top-0 left-0 w-full sm:w-auto bg-white dark:bg-slate-950 sm:bg-transparent sm:dark:bg-transparent shadow-sm sm:shadow-none sm:p-0 z-40`}
                        >
                            <NavigationMenuItem>
                                <NavLink to="/" className="mr-3" onClick={() => setIsOpen(!isOpen)}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </NavLink>
                                <NavLink to="/about" className="mr-3" onClick={() => setIsOpen(!isOpen)}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </NavLink>
                                <NavLink to="/projects" className="mr-3" onClick={() => setIsOpen(!isOpen)}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Projects
                                    </NavigationMenuLink>
                                </NavLink>
                                <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </NavLink>
                                <NavLink to="/blogs" onClick={() => setIsOpen(!isOpen)}>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blogs
                                    </NavigationMenuLink>
                                </NavLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Theme Toggle Button */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="px-4 py-2 rounded bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 transition-colors flex items-center justify-center"
                                >
                                    {theme === "dark" ? (
                                        <SunIcon className="w-6 h-6 text-yellow-500" />
                                    ) : (
                                        <MoonIcon className="w-6 h-6 text-gray-800" />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    {theme === "dark"
                                        ? "Click to switch to light mode"
                                        : "Click to switch to dark mode"}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </>
    )
}