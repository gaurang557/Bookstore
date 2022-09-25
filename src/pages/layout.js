import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><button>Home</button></Link>
          </li>
          <li>
            <Link to="/signup"><button>Signup</button></Link>
          </li>
          <li>
            <Link to="/login"><button>Login</button></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;