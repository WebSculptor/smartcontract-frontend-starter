import { siteConfig } from "@/config";
import Wrapper from "./wrapper";
import Link from "next/link";

export default function Header() {
  const paths = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Service",
      href: "/service",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-16 bg-background/50 backdrop-blur-xl z-50">
      <Wrapper className="size-full flex items-center justify-between gap-6">
        <h1>{siteConfig.title}</h1>

        <ul className="flex items-center gap-6">
          {paths.map((path) => (
            <Link key={path.label} href={path.href}>
              {path.label}
            </Link>
          ))}
        </ul>
      </Wrapper>
    </header>
  );
}
