import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useUserContext } from "./context/UserContext";

//Layout.js

const App: React.FC = () => {
  const { logoutUser, loggedInUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div className=" h-screen w-full bg-slate-500 flex flex-col ">
      <header className="w-[100vw] p-4 flex justify-between border border-black sticky top-0 bg-white">
        {!loggedInUser ? (
          <h1>Welcome to E-wallet</h1>
        ) : (
          <h1>Welcome {loggedInUser.username}</h1>
        )}

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/cardpage"}>Card Page</Link>
            </li>
            <li>
              <Link to={"/addcardpage"}>Add a card</Link>
            </li>
            <li>
              {!loggedInUser ? (
                <Link to={"/cardpage"}>Login</Link>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
        {/* Outlet is where nested routes (like Home and CardPage) will be rendered */}
      </main>
    </div>
  );
};

export default App;
