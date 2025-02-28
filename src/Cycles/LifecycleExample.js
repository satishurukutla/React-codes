import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
//life cycles method  are  present in the class component 
//majorly  three method are present 
//it is not used in the function because function use the hooks concept 