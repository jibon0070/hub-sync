import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const menu: {
  name: string;
  href: string;
  child?: { name: string; href: string }[];
}[] = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Solutions",
    href: "#",
    child: [
      {
        name: "Test",
        href: "#",
      },
      {
        name: "Test2",
        href: "#",
      },
    ],
  },
  {
    name: "Case Study",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Team",
    href: "#",
  },
  {
    name: "News",
    href: "#",
  },
  {
    name: "Learn",
    href: "#",
  },
];

function NavItem({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-2 hover:bg-white hover:text-black py-2 px-4 transition duration-300 ease-in-out",
        className,
      )}
    />
  );
}

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 justify-center py-6">
          {menu.map((item) => (
            <li key={item.name}>
              {!item.child ? (
                <NavItem href={item.href}>{item.name}</NavItem>
              ) : (
                <HoverCard>
                  <HoverCardTrigger>
                    <NavItem href={item.href}>
                      {item.name} <ChevronDown className="size-4" />
                    </NavItem>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className={"mt-2 bg-white/1 p-0 rounded overflow-hidden"}
                  >
                    <ul>
                      {item.child.map((item) => (
                        <li key={item.name}>
                          <NavItem className="w-full" href={item.href}>
                            {item.name}
                          </NavItem>
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
