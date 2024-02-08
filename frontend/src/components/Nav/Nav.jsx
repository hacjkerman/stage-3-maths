import NavCSS from "./Nav.module.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.jsx";

import Link from "next/link";

export default function Nav() {
  return (
    <div className={NavCSS.navBox}>
      <ul className={NavCSS.links}>
        <li className={NavCSS.link}>
          <DropdownMenu>
            <DropdownMenuTrigger>Addition</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/docs/addition/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/addition/medium">Medium</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/addition/hard">Hard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={NavCSS.link}>
          <DropdownMenu>
            <DropdownMenuTrigger>Subtraction</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/docs/subtraction/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/subtraction/medium">Medium</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/subtraction/hard">Hard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={NavCSS.link}>
          <DropdownMenu>
            <DropdownMenuTrigger>Multiplication</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/docs/multiplication/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/multiplication/medium">Medium</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/multiplication/hard">Hard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={NavCSS.link}>
          <DropdownMenu>
            <DropdownMenuTrigger>Division</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/docs/division/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/division/medium">Medium</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/docs/division/hard">Hard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  );
}
