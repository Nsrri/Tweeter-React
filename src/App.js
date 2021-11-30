import "./App.css";
import Login from "./Login";

import { Routes, Route, Link } from "react-router-dom";
import AllTweetPage from "./AllTweetPage";
import NewTweet from "./NewTweet";
import { useNavigate } from "react-router";
import RequireLogin from "./RequireLogin";
import LogOut from "./logout";
import { useState } from "react";

function App() {
  const [id, setId] = useState(0);
  const [token, setToken] = useState(" ");
  function deleteToken() {
    setToken(null);
    sessionStorage.clear();
  }
  return (
    <div className="App">
      <header className="App-header">
        {!sessionStorage.getItem("token") ? (
          <Link to="login" className="li">
            Log in
          </Link>
        ) : (
          <Link to="logout" className="li" onClick={deleteToken}>
            Log out
          </Link>
        )}
        <Link to="AllTweetPage" className="li">
          AllTweetPage
        </Link>
        <Link to="NewTweet" className="li">
          NewTweet
        </Link>
      </header>
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} setId={setId} />}
        />
        <Route path="/logout" element={<LogOut />} />

        <Route
          path="/AllTweetPage"
          element={
            <RequireLogin>
              <AllTweetPage token={token} />
            </RequireLogin>
          }
        />

        <Route
          path="/NewTweet"
          element={
            <RequireLogin>
              <NewTweet />
            </RequireLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
