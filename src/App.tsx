import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import HomePage from './components/HomePage'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='w-1/2 mx-auto flex flex-col justify-center text-center'>
      <Router>
        <NavigationMenu>
          <div className="flex items-center justify-start h-16 px-4 space-x-8 w-full">
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem>
                <NavLink to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </NavLink>
                <NavLink to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </NavLink>
                <NavLink to="/projects">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </NavLink>
                <NavLink to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Theme Toggle Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors flex items-end"
                  >
                    {theme === 'dark' ? (
                      <SunIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <MoonIcon className="w-6 h-6 text-gray-800" />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {theme === 'dark'
                      ? 'Click to switch to light mode'
                      : 'Click to switch to dark mode'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </NavigationMenu>


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </Router>
      <footer className="py-6 text-white text-center">
        <p>&copy; 2024 Stefan. All rights reserved.</p>
        <div>
          <a href="https://github.com/yourusername" className="text-blue-400 mx-2">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-400 mx-2">LinkedIn</a>
          <a href="https://twitter.com/yourusername" className="text-blue-400 mx-2">Twitter</a>
        </div>
      </footer>
    </div>

  )
}

export default App
