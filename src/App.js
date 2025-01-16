import React from "react";
import VideoReel from "./components/VideoReel";
import './App.css';

function App() {
  const videoData = [
    {
      videoSrc: "/videos/video1.mp4",
      productTags: [
        { top: "20%", left: "30%", productName: "Traffic", productUrl: "/product/1" },
        { top: "50%", left: "70%", productName: " Park Travel", productUrl: "/product/2" },
      ],
    },
    {
      videoSrc: "/videos/video2.mp4",
      productTags: [
        { top: "10%", left: "20%", productName: "Couple of Buses", productUrl: "/product/3" },
        { top: "60%", left: "50%", productName: "Nature Travel", productUrl: "/product/4" },
      ],
    },
    {
      videoSrc: "/videos/video3.mp4",
      productTags: [
        { top: "10%", left: "20%", productName: "cars", productUrl: "/product/3" },
        { top: "60%", left: "50%", productName: "Park Travel", productUrl: "/product/4" },
      ],
    },
    {
      videoSrc: "/videos/video4.mp4",
      productTags: [
        { top: "10%", left: "20%", productName: "WaterFlow-Trees", productUrl: "/product/3" },
        { top: "60%", left: "50%", productName: "Nature-FlowSea", productUrl: "/product/4" },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="video-container">
        {videoData.map((data, index) => (
          <VideoReel key={index} videoSrc={data.videoSrc} productTags={data.productTags} />
        ))}
      </div>
    </div>
  );
}

export default App;
