import "./header.css"; 
import logo from "../../../public/assets/logoprjsem3.png";
import 'boxicons';
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left">
          <div className="header-item">
            <i className="fas fa-map-marker-alt"></i>  Mon - Sat 9.00 - 18.00 
          </div>
          <div className="header-item">
            <box-icon name='headphone' ></box-icon>
            <i className="fas fa-phone-alt"></i> 1800 80 80 88
          </div>
        </div>
        <Link className="header-logo" to='/'>
          <img src={logo} alt="Logo" /> 
          <p>YGJ</p>
        </Link>
        <div className="header-top-right">
          <div className="header-item">
            <Link to='/login'> <box-icon name='user'></box-icon></Link>
            
            {/* <i className="fas fa-user"></i> My Account */}
          </div>
          <div className="header-item">
            <Link className="nav-item" to='/cart' ><box-icon type='solid' name='cart'></box-icon></Link><span className="cart-count">0</span>
          </div>
        </div>
      </div>
      <nav className="header-nav">
      <Link className="nav-item" to='/'>HOME</Link>
        {/* <a href="#" className="nav-item">CATEGORY</a> */}
        <Link className="nav-item" to='/shop'>SHOP</Link>
        <Link className="nav-item" to='/blog'>BLOG</Link>
        <Link className="nav-item" to='/aboutcontact'>ABOUT & CONTACT US</Link>
        {/* <Link href="#" className="nav-item">CONTACT</Link> */}
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button type="button"><box-icon name='search' ></box-icon></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
