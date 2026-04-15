import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Philosophy from "./pages/Philosophy" // Added this import
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import NotFound from "./pages/NotFound"

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/philosophy" element={<Philosophy />} /> {/* Added this route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}