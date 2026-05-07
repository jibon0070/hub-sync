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

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
