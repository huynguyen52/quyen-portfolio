import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Hello</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>My Skills</a>
          </li>
          <li>
            <a>Work Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
