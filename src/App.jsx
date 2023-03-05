import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [tab, setTab] = useState("login");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <h2 className="card-title">
              <div className="tabs tabs-boxed">
                <a
                  className={`tab ${tab === "login" ? "tab-active" : ""}`}
                  onClick={() => setTab("login")}
                >
                  登录
                </a>
                <a
                  className={`tab ${tab === "register" ? "tab-active" : ""}`}
                  onClick={() => setTab("register")}
                >
                  注册
                </a>
              </div>
            </h2>
            {tab === "login" ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
