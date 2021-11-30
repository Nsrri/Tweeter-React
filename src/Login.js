import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
const validEmails = [
  "mickey-mouse@react-dev.com",
  "donald-duck@react-dev.com",
  "captain-jack-sparrow@react-dev.com",
  "nemo@react-dev.com",
  "ariel@react-dev.com",
  " winnie-the-pooh@react-dev.com",
];

const Login = ({ setToken, setId }) => {
  let navigate = useNavigate();

  // const [id, setId] = useState(0);
  // const [token, setToken] = useState(" ");
  const [userInput, setUserInput] = useState(" ");
  const [userPass, setUserPass] = useState(" ");

  function goToAllTweet(e) {
    e.preventDefault();
    fetch("https://js-advanced-twitter.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInput,
        password: userPass,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        sessionStorage.setItem("token", result.accessToken);
        setToken(result.accessToken);
        sessionStorage.setItem("id", result.user.id);
        setId(result.user.id);
      })
      .then(() => {
        navigate("/AllTweetPage");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="body">
      <h2>Welcome to Tweet App</h2>
      <form className="form-design form" onSubmit={goToAllTweet}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="email"
          placeholder="example@yourdomain.com"
          required
          className="input"
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="input"
          onChange={(e) => setUserPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
