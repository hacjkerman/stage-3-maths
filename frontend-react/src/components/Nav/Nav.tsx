"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navLinks = [
  {
    name: "Addition",
    href: "/docs/addition/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Subtraction",
    href: "/docs/subtraction/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Division",
    href: "/docs/division/",
    difficulties: ["easy", "medium", "hard"],
  },
  {
    name: "Multiplication",
    href: "/docs/multiplication/",
    difficulties: ["easy", "medium", "hard"],
  },
];

export default function Nav() {
  return (
    <nav className="flex justify-center">
      {navLinks.map((link) => {
        return (
          <div>
            <DropdownMenu key={link.name}>
              <DropdownMenuTrigger>{link.name}</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Easy </DropdownMenuItem>
                <DropdownMenuItem>Medium </DropdownMenuItem>
                <DropdownMenuItem>Hard </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}
    </nav>
  );
}
