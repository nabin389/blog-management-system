import {Link} from "react-router-dom"
const Navbar = () =>{
    return (
        <>
    <nav className="navbar">
  <div className="logo">
    <h2>BMS</h2>
  </div>
  <div className = "nav-links">
    <Link to ="/home">Home</Link>
    <Link to ="/create">Create blog</Link>
    {/* <Link to ="/single">Single Blog</Link> */}
  </div>
</nav>

        </>
    )
}
export default Navbar;