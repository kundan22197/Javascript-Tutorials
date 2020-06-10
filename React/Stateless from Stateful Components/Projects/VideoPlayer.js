// A parent component defines a function to update its state and passes it as a prop to another child component. 
// The child component contains the logic(event handler that takes an event object and extracts the name). 
// The function then passes the name as a parameter to the state updating function in the parent component. The parent component
// then updates the state.
// Another child component is given the state and is used to display on the browser.
// The parent component is stateful whereas the child components are stateless.




// App.js


import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };

    this.chooseVideo = this.chooseVideo.bind(this);
  }


  chooseVideo(newVideo) {
    this.setState({ src: VIDEOS[newVideo]});
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);





// Video.js

import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}





// Menu.js

import React from 'react';

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}