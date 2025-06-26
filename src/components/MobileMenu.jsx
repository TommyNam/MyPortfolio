import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = ""; 
        };
    }, [menuOpen]);

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${menuOpen
                            ? "h-screen opacity-100 pointer-events-auto" // Menu is open
                            : "h-0 opacity-0 pointer-events-none"      // Menu is closed (should not be rendered anyway)
                        }
                    `}
        >
            <button
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            >
                &times; {/* The 'X' character */}
            </button>
        </div>
    );
};
