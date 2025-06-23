import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from './pages/NewsDetail';
import Contacts from "./pages/Contacts";
import Teachers from "./pages/Teachers";
import TeacherDetail from './pages/TeacherDetail'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import EventsCalendar from "./pages/EventsCalendar";
import EventDetail from './pages/EventDetail'; 
import FeedbackForm from "./pages/FeedbackForm";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100 d-flex flex-column" : "bg-light text-dark min-vh-100 d-flex flex-column"}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/eventscalendar" element={<EventsCalendar />} />
        <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
