import Navbar from "./Navbar"

const Layout = ({children, bg}) => {
  return (
    <div className={bg}>
        <Navbar />
        {children}
    </div>
  )
}
export default Layout