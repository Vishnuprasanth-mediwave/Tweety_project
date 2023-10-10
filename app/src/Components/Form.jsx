import { useEffect, useState } from "react";

function Form({ addTweet }) {
  const [tweet, setTweet] = useState("");
  const [isSubmit, setIsSubmit] = useState(true);
  useEffect(() => {
    if (tweet.length) {
      setIsSubmit(false);
    }
  }, [tweet]);

  function handleFormSumbit(e) {
    e.preventDefault();
    addTweet(tweet);
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Add Tweet</span>
          </div>
          <form onSubmit={handleFormSumbit}>
            <div className="row">
              <input
                type="text"
                placeholder="Enter the tweet here"
                required
                onChange={(e) => setTweet(e.target.value)}
              />
            </div>
            <div className="form-add">
              <button className="submit-btn" type="submit" disabled={isSubmit}>
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          <button className="back">
            <a href="" className="back-btn">
              back
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
