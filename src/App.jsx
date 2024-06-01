import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Members from "./pages/Members.jsx";
import MediaGallery from "./pages/MediaGallery.jsx";
import UpcomingProjects from "./pages/UpcomingProjects.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/upcoming-projects" element={<UpcomingProjects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
