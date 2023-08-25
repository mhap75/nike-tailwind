import { hamburger } from "../assets/icons/index.js";
import { headerLogo } from "../assets/images/index.js";
import { navLinks } from "../const/index.js";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="flexBetween max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike home" width={130} height={29} />
        </a>

        <ul className="flexCenter flex-1 gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat text-slate-gray text-lg leading-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden cursor-pointer max-lg:block">
          <img src={hamburger} alt="toggle menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
