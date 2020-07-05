// LIFECYCLE MOUNTING METHODS:
//componentWillMount
//componentDidMount

// Mounting lifecycle methods get called only for the first time that the component renders in this order:
// componentWillMount, render and componentDidMount

// example for componentWillMount that gets called just before the component renders

import React from 'react';
import ReactDOM from 'react-dom';

export class Example extends React.Component {
  componentWillMount() {
    alert('component is about to mount!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Example />,
    document.getElementById('app')
  );
}, 2000);



// example where the componentWillMount can call this.setState

import React from 'react';
import ReactDOM from 'react-dom';

export class Example2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  componentWillMount() {
    this.setState({ text: 'Hello world' });
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

ReactDOM.render(
  <Example2 />,
  document.getElementById('app')
);




/// componentDidMount: this method gets called after the component renders


import React from 'react';

export class Example extends React.Component {
  componentDidMount() {
    alert('component just finished mounting!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}



/// LIFECYCLE UPDATE METHODS : These get called every time the component updates starting from the second render.

// Five updating lifecycle methods in order:
//componentWillReceiveProps
//shouldComponentUpdate
//componentWillUpdate
//render
//componentDidUpdate



//componentWillReceiveProps : takes in one parameter (nextProps)

// This method gets called before the render function and can even change the state before rendering occurs.

// example

import React from 'react';

export class Example extends React.Component {
  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
    	+ "I'm about to get:  " + nextProps.text);
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
	<Example text="Hello world" />,
	document.getElementById('app')
);

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
	ReactDOM.render(
		<Example text="Hello world" />,
		document.getElementById('app')
	);
}, 1000);




//A game that uses the componentWillReceiveProps

// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);



// TopNumber.js

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }
  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};






// shouldComponentUpdate : This method gets called before render and returns true or false. 

//If false is returned, the render and the remaining functions after shouldComponentUpdate don't execute.

// It takes in two parameters : nextProps and nextState

// Example.js

import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subtext: 'Put me in an <h2> please.' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}





// componentWillUpdate : This method takes two parameters : nextState and nextProps 

// This method cannot call this.setState inside it. It is used for doing non react stuff like calling APIs.
//If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, 
//then componentWillUpdate is a good place to do that.


// Example

import React from 'react';

export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}



//TopNumber.js

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (document.body.style.background != yellow && this.state.highest >= 950*1000) {
      document.body.style.background = yellow;
    } else if (!this.props.game && nextProps.game) {
      document.body.style.background = 'white';
    }
    
  } 

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};




// componentDidUpdate : This method gets called after the render function.

// It takes two parameters : prevProps and prevState

//componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. 
//It’s similar to componentWillUpdate in that way, except that it gets called after render instead of before.


// Example

import React from 'react';

export class Example extends React.component {
  componentDidUpdate(prevProps, prevState) {
    alert('Component is done rendering!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}


// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.latestClick < prevState.latestClick) {
      this.endGame();
    }
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);




// UNMOUNTING LIFECYCLE METHODS

// componentWillUnmount : componentWillUnmount gets called right before a component is removed from the DOM. 

// It performs the cleanup stuff after the component is removed
// It takes two parameters : prevProps and prevState

// Example

import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}




// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './Enthused';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enthused: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEnthusiasm() {
    this.setState({
      enthused: !this.state.enthused
    });
  }

  setText(text) {
    this.setState({ text: text });
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({ text: text });
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.enthused) {
      button = (
        <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
      );
    } else {
      button = (
        <button onClick={this.toggleEnthusiasm}>
          Add Enthusiasm!
        </button>
      );
    }

    return (
      <div>
        <h1>Auto-Enthusiasm</h1>
        <textarea rows="7" cols="40" value={this.state.text} 
          onChange={this.handleChange}>
        </textarea>
        {button}
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);



// Enthused.js

import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }

  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}
