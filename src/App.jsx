import { useState } from "react";
import './App.css';
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}


      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {menuOpen && (
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}

        {isLoaded && (
            <main className="pt-16 p-4">
                <h1 className="text-4xl text-center">Welcome to My Portfolio!</h1>
                <p className="text-center mt-4">Wassup</p>
            </main>
        )}
      </div>
    </>
  );
}

export default App;
