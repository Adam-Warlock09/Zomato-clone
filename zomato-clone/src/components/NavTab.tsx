import "../styles/navtab.css";

const NavTab = () => {
  return (
    <ul className="nav">
      <div>
        <li className="navitem">
          <a className="navlink" aria-current="page" href="#">
            Get The App
          </a>
        </li>
      </div>
      <div>
        <li className="navitem">
          <a className="navlink" href="#">
            Investor Relations
          </a>
        </li>
        <li className="navitem">
          <a className="navlink" href="#">
            Add Restaurants
          </a>
        </li>
        <li className="navitem">
          <a className="navlink" href="#">
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a className="navlink" href="#">
            Sign up
          </a>
        </li>
      </div>
    </ul>
  );
};

export default NavTab;
