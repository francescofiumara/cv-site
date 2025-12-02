import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Cv from './pages/Cv'

function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-transparent text-slate-50">
      <Navbar />
      <main
        key={location.pathname}
        className="mx-auto flex w-full flex-1 max-w-screen-xl px-4 pb-16 pt-10 sm:px-6 md:pt-12 lg:pt-14"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/cv.html" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
