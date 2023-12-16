// App.js

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const videoLinks = [
    'https://www.youtube.com/watch?v=bnExiZiU0vA&ab_channel=TLEEliminators-byPriyansh',
    'https://www.youtube.com/watch?v=ThOkOfn3E-g&ab_channel=StarSports',
    'https://www.youtube.com/watch?v=LOd-uvWCIuA&ab_channel=FanCode',
    'https://www.youtube.com/watch?v=hAPVhMIXTg8&ab_channel=cricket.com.au',
    'https://www.youtube.com/watch?v=mllJ49QIIVs&ab_channel=cricket.com.au',
    'https://www.youtube.com/watch?v=W2RT3YIPSYU&ab_channel=cricket.com.au',
    'https://www.youtube.com/watch?v=Y1J9_9-vNcU&ab_channel=England%26WalesCricketBoard',
    
   
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
      
      

      <h1><i class="fa-brands fa-youtube"></i> YouTube Page</h1>
      
     
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
      <div id="footer">
            <p>© 2023 Video Playback. All rights reserved.</p>
        </div>
    </div>
  );
};

const getVideoId = (link) => {
  const url = new URL(link);
  return url.searchParams.get('v');
};

export default App;
