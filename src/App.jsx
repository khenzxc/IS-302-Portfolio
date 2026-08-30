import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <HomePage />
        </main>
      </div>

      <Footer />
    </div>
  );
}