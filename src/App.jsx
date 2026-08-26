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

      <footer className="relative z-10 bg-[#030e21] border-t border-slate-800/80 py-8 text-center text-xs font-medium text-blue-200/70">
        IS-302 Business Process Management • Team Portfolio Project
      </footer>
    </div>
  );
}