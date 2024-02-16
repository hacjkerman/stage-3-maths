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

export function Navbar() {
  return (
    <nav className="flex w-full justify-center py-4">
      {navLinks.map((link) => {
        return (
          <div className="flex px-1">
            <DropdownMenu key={link.name}>
              <DropdownMenuTrigger>
                <button className="gap-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 focus:bg-gray-100/50 focus:outline-none">
                  {link.name}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href={link.href + link.difficulties[0]}>Easy</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href={link.href + link.difficulties[1]}>Medium</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href={link.href + link.difficulties[2]}>Hard</a>
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
