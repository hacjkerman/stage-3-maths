import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Addition",
    href: "/addition/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Subtraction",
    href: "/subtraction/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Division",
    href: "/division/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Multiplication",
    href: "/multiplication/",
    difficulties: ["easy", "medium", "hard"],
  },
];

export function Navbar() {
  return (
    <nav className="flex w-full justify-center py-4">
      {navLinks.map((link) => {
        const easyPath = link.href + link.difficulties[0];
        const mediumPath = link.href + link.difficulties[1];
        const hardPath = link.href + link.difficulties[2];
        console.log(easyPath);
        return (
          <div className="flex px-1">
            <DropdownMenu key={link.name}>
              <DropdownMenuTrigger>
                <button className="gap-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none xs: text-xs">
                  {link.name}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to={easyPath}>Easy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={mediumPath}>Medium</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to={hardPath}>Hard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}
      {/* <div className="flex gap-4">
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none"
          href="#"
        >
          Addition
        </a>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none"
          href="#"
        >
          Multiplication
        </a>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none"
          href="#"
        >
          Division
        </a>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none"
          href="#"
        >
          Subtraction
        </a>
      </div> */}
    </nav>
  );
}
