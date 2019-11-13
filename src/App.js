import React from 'react';
import logo from './logo.svg';
import './App.css';
import Disqus from 'disqus-react';

const App = () => {
  const disqusShortname = "happy-b-day" //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "http://localhost:8080", //this.props.pageUrl
    identifier: "article-id", //this.props.uniqueId
    title: "Title of Your Article" //this.props.title
  }
  return (
    <div className="App">
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
