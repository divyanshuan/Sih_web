import "./nav.css";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className=" navi">
      <ul class="nav">
        <li class="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>

        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/er">
            ER-Digram
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/db">
            Database
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
