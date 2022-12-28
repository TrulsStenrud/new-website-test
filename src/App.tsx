import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          { path: "/", element: <PageOne /> },
          { path: "/pageOne", element: <PageOne /> },
          { path: "/pageTwo", element: <PageTwo /> },
        ],
        { basename: "/new-website-test" }
      )}
    />
  );
}

const PageOne: React.FC = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => navigate("/pageTwo")}>Go to page two</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

const PageTwo: React.FC = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <h2>Side 2</h2>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => navigate("/pageOne")}>Go to page one</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
