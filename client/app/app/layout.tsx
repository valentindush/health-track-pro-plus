import NavBar from "../components/dashboard/navBar"
import SideBar from "../components/dashboard/sideBar"

const Layout = ({ children }: {children: React.ReactNode}) => {
    return(
        <main className="flex bg-gray-100">
            <SideBar />
            <div className="w-[calc(100vw-15rem)]">
                <NavBar />
                {children}
            </div>
        </main>
    )
}

export default Layout;