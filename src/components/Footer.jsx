import { copyrightSign } from "../assets/icons/index.js";
import { footerLogo } from "../assets/images/index.js";
import { footerLinks, socialMedia } from "../const/index.js";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flexWrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flexCol items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike home" width={150} height={46} />
          </a>
          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((social) => (
              <div
                className="flexCenter h-12 w-12 rounded-full bg-white"
                key={social.alt}
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flexWrap flex-1 justify-between gap-20 lg:gap-10">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    className="mt-3 w-fit cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={name}
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copy right"
            width={20}
            height={20}
            className="mb-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
