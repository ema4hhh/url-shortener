import Link from "next/link";

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Create',
    href: '/app/create'
  },
  {
    name: 'Urls List',
    href: '/app/urls'
  }
]

function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 text-slate-950">
      {
        links.map((link) => (
          <Link key={link.href} href={link.href}>{link.name}</Link>
        ))
      }
    </div>
  )
}

export default SideNav;