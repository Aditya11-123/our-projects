import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/animations.css';

function AppContent() {
  return (
    <div className="page-layout animate-fadeIn bg-gradient-to-br from-[#050505] to-[#1a1a1a] text-white min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* We will add /services/:slug later */}
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* We will add /case-studies/:slug later */}
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
