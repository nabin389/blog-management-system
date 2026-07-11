import {Link} from "react-router-dom"
const Footer = () =>{
    return (
      <>
    <footer className="footer">
      <div className="footer-content">
        <h2>BMS</h2>
        <p>Manage your blogs with ease.</p>

 {/* this is the links in footer and this works  */}
        {/* <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to ="/create">Create Blog</Link>
          <Link to ="/single">Single Blog</Link>
        </div> */}

        <p className="copyright">
          © 2026 Blog Management System. All Rights Reserved.
        </p>
      </div>
    </footer>
      </>  
    )
}
export default Footer;