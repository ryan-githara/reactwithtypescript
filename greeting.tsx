import React from 'react';

// STEP 1: Define the shape of props
// We tell TypeScript that Greeting expects a prop called 'name' which must be a string
interface GreetingProps {
  name: string;
}

// STEP 2: Apply the interface to the component
// React.FC<GreetingProps> means "Functional Component that uses GreetingProps"
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Now TypeScript knows 'name' is a string and will give error if you pass a number
  return <div>Hello, {name}!</div>;
};

export default Greeting;

// HOW TO USE IT:
// <Greeting name="Ali" /> -> Correct
// <Greeting name={123} /> -> ERROR in TypeScript (This is the benefit!)