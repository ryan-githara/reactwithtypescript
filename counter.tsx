import React, { Component } from 'react';

// STEP 1: Define the type for State
// Counter's state only has one property 'count' which is a number
interface CounterState {
  count: number;
}

// STEP 2: Define the type for Props (here it's empty because Counter doesn't receive props)
// We need it for the class generic
interface CounterProps {
  // No props for this component, but we define it for type safety
}

// STEP 3: Add types to the class
// Component<CounterProps, CounterState> tells TypeScript what props and state this class uses
class Counter extends Component<CounterProps, CounterState> {
  
  // STEP 4: Type the initial state
  state: CounterState = {
    count: 0
  };

  // STEP 5: Type the method - here return type is void (returns nothing)
  increment = (): void => {
    // Using functional setState is safer in TypeScript/React
    this.setState((prevState) => ({ 
      count: prevState.count + 1 
    }));
  };

  render() {
    // FIXED: return must be on same line as ( ) in React
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;