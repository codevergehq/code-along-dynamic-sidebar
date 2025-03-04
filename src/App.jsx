import { NavLink, Routes, Route } from "react-router";

const Home = () => <h1>Home</h1>;
const Profile = () => <h1>Profile</h1>;
const Settings = () => <h1>Settings</h1>;

const routes = [
  {
    path: "/",
    main: () => <Home />,
    sidebar: () => (
      <p>
        This is your home page. You'll see your feed which is made up of the
        people you follow.
      </p>
    ),
  },
  {
    path: "/profile",
    main: () => <Profile />,
    sidebar: () => (
      <p>
        This is your profile page. You'll be able to see all your profile
        information as well as the people you follow.
      </p>
    ),
  },
  {
    path: "/settings",
    main: () => <Settings />,
    sidebar: () => (
      <p>
        This is your settings page. You can change your name, image, and
        anything else associated with your account.
      </p>
    ),
  },
];

export default function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>

        <Routes>
          {routes.map(({ path, sidebar }) => (
            <Route key={path} path={path} element={sidebar()} />
          ))}
        </Routes>
      </div>

      <Routes>
        {routes.map(({ path, main }) => (
          <Route key={path} path={path} element={main()} />
        ))}
      </Routes>
    </div>
  );
}