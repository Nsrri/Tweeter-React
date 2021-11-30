import { useEffect, useState } from "react";
import "./alltweet.css";

const AllTweetPage = ({ token }) => {
  const [tweeters, setTweets] = useState([]);
  useEffect(() => {
    fetch(" https://js-advanced-twitter.herokuapp.com/tweets", {
      headers: {
        Authorization: ` Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((tweets) => setTweets(tweets))
      .catch((error) => console.log("error", error));
  }, [token]);

  return (
    <div className="design">
      <h2>All The Tweets</h2>
      {tweeters.map((tweet) => (
        <>
          {/* key should be in the parent element not all of them */}
          <h2 key={tweet.title}>{tweet.title}</h2>
          <p key={tweet.text} className="text">
            {tweet.text}
          </p>
          <p key={tweet.creator}>{tweet.creator}</p>
          <p key={tweet.createdAt}>
            {new Date(tweet.createdAt).toLocaleDateString()}
          </p>
        </>
      ))}
    </div>
  );
};
export default AllTweetPage;
