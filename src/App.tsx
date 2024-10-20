import { Outlet } from "react-router-dom";
import "./App.css";

//Layout.js

const App: React.FC = () => {
  return (
    <div className=" h-screen w-full bg-slate-500">
      <header className="w-[100vw] p-4 flex justify-between border border-black">
        <h1>This is my new wallet</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/cardpage">Card Page</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
        {/* Outlet is where nested routes (like Home and CardPage) will be rendered */}
      </main>
    </div>
  );
};

export default App;
