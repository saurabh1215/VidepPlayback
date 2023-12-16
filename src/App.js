// App.js

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const videoLinks = [
    'https://www.youtube.com/watch?v=ThOkOfn3E-g&ab_channel=StarSports',
    'https://www.youtube.com/watch?v=yxTuj__LXJU',
    'https://www.youtube.com/watch?v=OcpIVIDZVKQ',
    'https://www.youtube.com/watch?v=Z2Qk-iQutpI',
    'https://www.youtube.com/watch?v=9cdcfTtpHS8',
    'https://www.youtube.com/watch?v=ZTMHbC0MkfQ',
    'https://www.youtube.com/watch?v=aRyuMNwn02w',

    // Add more video links as needed
  ];

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
  };

  const onVideoSelect = (index) => {
    setVideoIndex(index);
  };

  return (
    <div className="youtube-page-container">
      <h1>YouTube Page</h1>
     
      <div className="video-player-container">
        <YouTube videoId={getVideoId(videoLinks[videoIndex])} opts={opts} onEnd={onVideoEnd} />
      </div>

      <div className="video-list-container">
        <h2>Video List</h2>
        <ul>
          {videoLinks.map((link, index) => (
            <li
              key={index}
              className={index === videoIndex ? 'selected-video' : ''}
              onClick={() => onVideoSelect(index)}
            >
              Youtube Video {index+1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getVideoId = (link) => {
  const url = new URL(link);
  return url.searchParams.get('v');
};

export default App;
