import { useState } from "react";
import useAuthStore from "../zustand/authStore";

function Login() {
  const [username, setUsername] = useState("");

 const { user, login, logout } =
  useAuthStore();

  const handleLogin = () => {
    if (!username.trim()) return;

    login(username);
    setUsername("");
  };

  return (
    <div className="section">
      <h2>Authentication</h2>

      {user ? (
        <>
          <p style={{ margin: "1rem 0" }}>
            Welcome, {user.name}
          </p>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;