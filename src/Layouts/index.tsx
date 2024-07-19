import { FunctionComponent } from "react"
import Header from "../components/Common/Header"
import Footer from "../components/Common/Footer"
import { Outlet } from "react-router-dom"
import Navv from "../components/Navv"


const Layout: FunctionComponent = () => {
    return (
        <>
        {/* <Navv/> */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;