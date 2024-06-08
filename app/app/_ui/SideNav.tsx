import { pageLinks } from "@/app/constants";
import Link from "next/link";

function SideNav() {
  return (
    <div className="flex h-full justify-around md:justify-start md:flex-col px-3 py-4 md:px-2 text-slate-950">
      {
        pageLinks.map((link) => (
          <Link key={link.href} href={link.href}>{link.name}</Link>
        ))
      }
    </div>
  )
}

export default SideNav;