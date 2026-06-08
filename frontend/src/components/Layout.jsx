import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children, bg}) => {
  return (
    <div className={bg}>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
export default Layout