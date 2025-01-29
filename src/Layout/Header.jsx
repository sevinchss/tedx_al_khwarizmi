import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import logo from "../assets/logo-white.png"
const Header = () => {
  var header = document.querySelector("#header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.remove("bg-transparent", "text-white");
      header.classList.add("bg-[#0a0808]", "text-white", "shadow-lg");
    } else {
      header.classList.remove("bg-[#0a0828]", "shadow-lg");
      header.classList.add("bg-transparent", "text-white");
    }
  });

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftNavItems = [
    { to: "/", label: "Home" },
    { to: "about", label: "About" },
    { to: "speakers", label: "Speakers" },
  ];

  const rightNavItems = [
    { to: "organizers", label: "Organizers" },
    { to: "gallery", label: "Gallery" },
    { to: "register", label: "Registration", button: true },
    { to: "register1", label: "Registration (guests) ", button: true },
  ];

  return (
    <header
      className="bg-primary shadow-md font-spartan text-lg text-text sticky top-0 z-10 duration-300"
      id="header" 
      onscroll="scroll()"
    >
      <div className="container py-8 px-0 pl-20 flex items-center justify-between lg:justify-between ">
        {/* Logo in the center */}
        <div className="absolute lg:left-[48%] left-1/2 transform -translate-x-1/2">
       <img src={logo} alt="" width={200}/>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex w-full justify-between">
          {/* Left Navigation */}
          <ul className="flex items-center gap-6">
            {leftNavItems.map((item, index) => (
              <li key={index} className="group relative">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-red-400 transition cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all group-hover:w-full"></div>
              </li>
            ))}
          </ul>

          {/* Right Navigation */}
        
          <ul className="flex items-center gap-6">
  {rightNavItems.map((item, index) => (
    <div className="flex ">
    <li key={index} className="group relative">
      {item.button ? (
        // Conditional rendering for "register" and "register1"
        item.to === "register" || item.to === "register1" ? (
          <div className="flex gap-4 flex-wrap sm:w-auto w-full"> {/* Flex container with wrap for small screens */}
            {/* Registration Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6xChbAdSfkfnt1HIA8G8Lx7yy_NNmM_l39z1q0NQWX5QkmA/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition">
                {item.label}
              </button>
            </a>
          </div>
        ) : (
          <ScrollLink to={item.to} smooth={true} duration={500}>
            <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition">
              {item.label}
            </button>
          </ScrollLink>
        )
      ) : (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          className="text-white hover:text-red-400 transition cursor-pointer"
        >
          {item.label}
        </ScrollLink>
      )}
      {!item.button && (
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all group-hover:w-full"></div>
      )}
    </li>
    </div>
  ))}
</ul>
        </nav>

        {/* Hamburger Menu */}
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Collapsible Navigation for small screens */}
      <Collapse open={openNav} className="lg:hidden bg-primary text-white">
        <ul className="flex flex-col items-center gap-4 py-4">
          {[...leftNavItems, ...rightNavItems].map((item, index) => (
            <li key={index}>
              {item.button ? (
                <ScrollLink to={item.to} smooth={true} duration={500}>
                  <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition">
                    {item.label}
                  </button>
                </ScrollLink>
              ) : (
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-red-400 transition cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </Collapse>
    </header>
  );
};

export default Header;
