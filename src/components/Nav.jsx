import { useState } from "react";
import socialData from "../content/social.json";
import NavItemChildrens from "./NavItemChildrens";

export default function Nav({ data }) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    if (open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    setOpen(!open);
  };

  return (
    <div className="block md:hidden">
      {open ? (
        <svg
          onClick={() => toggleNav()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          onClick={() => toggleNav()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      )}
      {open && (
        <nav className="fixed top-16 left-0 right-0 bottom-0 bg-white flex flex-col justify-between">
          <ul className="flex flex-col gap-2 justify-center items-center text-center pt-12 ">
            {data.map((menuItem) => (
              <li className="cursor-pointer font-subtitle font-bold text-2xl">
                {menuItem.childrens ? (
                  <NavItemChildrens value={menuItem.title}>
                    <ul key={menuItem.url}>
                      {menuItem.childrens.map((children) => (
                        <li key={children.url} className="my-2">
                          <a href={children.url}>{children.title}</a>
                        </li>
                      ))}
                    </ul>
                  </NavItemChildrens>
                ) : (
                  <a href={menuItem.url}>{menuItem.title}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start my-4 md:my-0 gap-4 pb-12">
            {socialData.map((social) => (
              <div key={social.url}>
                <a href={social.url} target="_blank" rel="nofollow">
                  <img
                    width={32}
                    height={32}
                    src={`/icons/${social.icon}.svg`}
                    alt={social.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
