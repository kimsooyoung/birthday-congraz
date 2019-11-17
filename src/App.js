import React from 'react';
import Disqus from 'disqus-react';
import Confetti from 'react-confetti'

import './App.css';
import logo from './logo.svg';

const App = () => {
  const { innerWidth, innerHeight } = window;
  const disqusShortname = "happy-b-day" //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "https://kimsooyoung.github.io/birthday-congraz/", //this.props.pageUrl
    identifier: "article-id", //this.props.uniqueId
    title: "Title of Your Article" //this.props.title
  }
  return (
    <div className="App">
      <Confetti
        width={innerWidth}
        height={innerHeight}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div className="article-container">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
