// Functional components have a function instead of a class to define a component.

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  
  // The same component class, written as a stateless functional component:
  export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
  }
  
  // Works the same either way:
  ReactDOM.render(
      <MyComponentClass />,
      document.getElementById('app')
  );



  // -------------------------------------------------------------------------------------



// normal class component
  import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

// functional component that has props passed as a parameter
export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
    </div>
  );
}
