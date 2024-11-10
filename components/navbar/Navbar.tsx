import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 bg-white shadow-md p-4 m-2 rounded-lg">
      <Link
        href="/"
        className="relative text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <span className="flex items-center">
          <HomeIcon className="mr-2" />
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.href} path={item.href} text={item.label} />
      ))}
    </nav>
  );
};
