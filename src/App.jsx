import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Activities from "./pages/Activities.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import Footer from "./components/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/:activityId" element={<ActivityDetail />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}