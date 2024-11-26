import { useEffect, useState } from "react";

export function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className={`App-header ${hidden ? "hidden" : ""}`}>
    <header className="">
      <div className="flex justify-center">
        <nav className="flex justify-center items-center mx-0 my-8 rounded-full bg-agroGreen-dark text-white h-10 w-full">
          <ul className="flex justify-between gap-4">
            <li>
              <a href="#hero">
                Inicio
              </a>
            </li>
            <li>
              <a href="#plants">
                Plantas
              </a>
            </li>
            <li>
              <a href="#about">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}