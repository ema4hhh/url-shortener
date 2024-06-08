import SideNav from "./_ui/SideNav"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 bg-slate-200">
        <SideNav />
      </div>
      <div className="flex flex-grow md:overflow-y-auto justify-center items-center">{children}</div>
    </div>
  )
}

export default Layout