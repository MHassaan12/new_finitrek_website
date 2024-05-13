import { FunctionComponent } from "react"
import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import { Outlet } from "react-router-dom"


const Layout: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;