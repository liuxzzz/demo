"use client";

import React, { PureComponent } from "react";

interface CounterProps {
  name: string;
  count: number;
}

class Counter extends PureComponent<CounterProps> {
  render() {
    console.log(`${this.props.name} 组件重新渲染了`);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>计数: {this.props.count}</p>
      </div>
    );
  }
}

// 父组件
class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
  };

  incrementCounter1 = () => {
    this.setState({ count1: this.state.count1 + 1 });
  };

  incrementCounter2 = () => {
    this.setState({ count2: this.state.count2 + 1 });
  };

  render() {
    return (
      <div>
        <Counter name="计数器1" count={this.state.count1} />
        <button onClick={this.incrementCounter1}>增加计数器1</button>

        <Counter name="计数器2" count={this.state.count2} />
        <button onClick={this.incrementCounter2}>增加计数器2</button>
      </div>
    );
  }
}

export default App;
