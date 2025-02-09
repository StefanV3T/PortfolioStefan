import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import ScrollLoadingCircle from './components/ScrollLoadingCircle'
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import RandomFactNotifier from './components/RandomFactNotifier'
import Blogs from './components/Blogs'
import BlogDetail from './components/BlogDetail'
import Navigation from './components/Navigation'


function App() {


  return (
    <div className='w-1/2 max-sm:w-80 mx-auto flex flex-col justify-center text-center'>
      <CustomCursor />

      <SpeedInsights />
      <Analytics />

      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />

        </Routes>
        <ScrollLoadingCircle />
        <RandomFactNotifier />
      </Router>
      <footer className="pb-6 text-center">
        <p>&copy; 2024 Stefan. All rights reserved.</p>
        <div>
          <a href="https://github.com/StefanV3T" target='_blank' className="text-blue-400 mx-2">GitHub</a>
          <a href="https://www.linkedin.com/in/stefan-vet-44164b2a9/" target='_blank' className="text-blue-400 mx-2">LinkedIn</a>
          <a href="https://www.instagram.com/stefan.vet/" target='_blank' className="text-blue-400 mx-2">Instagram</a>
        </div>
      </footer>
    </div>

  )
}

export default App
