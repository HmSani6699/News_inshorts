import React from "react";
import "./Mobile.css";
import Slider from "../Slider/Slider";

const Mobile = () => {
  const allDatas = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=w0HS0L2BXkU",
      channel: "sadiq",
      description: "This is Sadiqur rahaman",
      comment: 12,
      shares: 5,
      dislike: 4,
      likes: 8,
    },
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=w0HS0L2BXkU",
      channel: "sadiq",
      description: "This is Sadiqur rahaman",
      comment: 12,
      shares: 5,
      dislike: 4,
      likes: 8,
    },
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=w0HS0L2BXkU",
      channel: "sadiq",
      description: "This is Sadiqur rahaman",
      comment: 12,
      shares: 5,
      dislike: 4,
      likes: 8,
    },
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=w0HS0L2BXkU",
      channel: "sadiq",
      description: "This is Sadiqur rahaman",
      comment: 12,
      shares: 5,
      dislike: 4,
      likes: 8,
    },
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=w0HS0L2BXkU",
      channel: "sadiq",
      description: "This is Sadiqur rahaman",
      comment: 12,
      shares: 5,
      dislike: 4,
      likes: 8,
    },
  ];
  return (
    <div className="app">
      <div className="app__videos">
        {allDatas.map((vid) => (
          <Slider
            id={vid._id}
            src={vid.url}
            channel={vid.channel}
            description={vid.description}
            like={vid.likes}
            dislike={vid.dislike}
            share={vid.shares}
            comment={vid.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
