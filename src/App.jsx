import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <HomePage />
        </main>
      </div>

      <footer className="border-t border-slate-100 py-8 text-center text-xs font-medium text-gray-400">
        IS-302 Business Process Management • Team Portfolio Project
      </footer>
    </div>
  );
}