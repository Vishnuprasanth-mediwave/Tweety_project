import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
function Nav() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [addTweet, setAddTweet] = useState([]);

  function formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${amOrPm}`;
  }

  const getCurrentDateFormatted = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
  };

  function handleAddTweet(tweet) {
    setAddTweet((prevTweet) => {
      const data = {
        id: uuidv4(),
        tweet: tweet,
        date: getCurrentDateFormatted(),
        time: formatTime(),
      };
      return [...prevTweet, data];
    });
    setIsShowForm(false);
  }
  return (
    <div>
      <div className="navbar">
        <div className="link">
          <button onClick={() => setIsShowForm(false)}>HOME</button>
          <button onClick={() => setIsShowForm(true)}>ADD FORM</button>
        </div>
        <div>
          <h1>Tweety</h1>
        </div>
      </div>
      {isShowForm ? (
        <>
          <Form addTweet={(tweet) => handleAddTweet(tweet)} />
        </>
      ) : (
        <>
          <div className="search">
            <input type="text" placeholder="Search here ....." />
            <button className="Search-btn">Search</button>
          </div>
          <div class="tweet-parent"></div>
          <div class="tweet-container">
            <div class="tweet-list-title">
              <h2>
                List of <span class="tweet-list">Tweet</span>
              </h2>
            </div>
            <div class="tweet-records">
              {addTweet.map((item, index) => {
                return (
                  <div key={index} id={item.id} className="card">
                    <p>{item.tweet}</p>
                    <div className="emoji-head">
                      <div className="emoji">
                        <span className="like">&#128077;</span>
                        <span>&#128078;</span>
                      </div>
                      <div className="date">
                        {item.date}, {item.time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Nav;
