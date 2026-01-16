import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ServicesPage from "@/react-app/pages/Services";
import ContactPage from "@/react-app/pages/Contact";
import BookMeetingPage from "@/react-app/pages/BookMeeting";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-meeting" element={<BookMeetingPage />} />
      </Routes>
    </Router>
  );
}
