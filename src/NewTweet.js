import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const NewTweet = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState(" ");
  const [text, setText] = useState(" ");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch("https://js-advanced-twitter.herokuapp.com/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: title,
        text: text,
        userId: sessionStorage.getItem("id"),
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .then(() => navigate("/AllTweetPage"))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <h2>New Tweet</h2>
      <form className="form-design" method="Post" onSubmit={onSubmitHandler}>
        <label htmlFor="text">The Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>Text</label>
        <textarea
          id="longtext"
          cols="50"
          rows="5"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </>
  );
};
export default NewTweet;
