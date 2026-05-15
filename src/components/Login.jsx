import { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  login,
  logout,
} from "../redux/authSlice";

function Login() {
  const [username, setUsername] =
    useState("");

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  const handleLogin = () => {
    if (!username.trim()) return;

    dispatch(login(username));

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

          <button
            onClick={() =>
              dispatch(logout())
            }
          >
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