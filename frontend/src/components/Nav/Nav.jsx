"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

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
                <DropdownMenuItem>
                  <Link href={link.href + link.difficulties[0]}>Easy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={link.href + link.difficulties[1]}>Medium</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={link.href + link.difficulties[2]}>Hard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      })}
    </nav>
  );
}
