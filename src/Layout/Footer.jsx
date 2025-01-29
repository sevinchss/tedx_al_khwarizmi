import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { to: "home", label: t("Home") },
    { to: "about", label: t("About") },
    { to: "speakers", label: t("Speakers") },
    { to: "organizers", label: t("Organizers") },
    { to: "Gallery", label: t("Gallery") },
  ];

  const socialLinks = [
    { icon: <FaTelegram size={23} />, to: "https://web.telegram.org/k/#@rrwsh", label: "Telegram" },
    { icon: <FaInstagram size={23} />, to: "https://github.com/sevinchss", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary">
      <hr  className="h-[0.5px] mt-10  border-red-500"/>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navLinks.map((link, index) => (
            <div key={index} className="px-5 py-2">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-base leading-6 text-secondary group relative w-max cursor-pointer"
              >
                <span className="hover:text-red-700">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-700 group-hover:w-full"></span>
              </ScrollLink>
            </div>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-900 transition-all "
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-sm text-secondary">
          &copy; {new Date().getFullYear()} TedX in Al-Khwarizmi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
