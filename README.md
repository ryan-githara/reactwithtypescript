# React to TypeScript Conversion - Checkpoint

## Steps I Followed

1.  **Renamed files:** Changed `Greeting.js` to `Greeting.tsx` and `Counter.js` to `Counter.tsx`
2.  **Installed TypeScript types:** `npm install --save-dev typescript @types/react @types/react-dom`
3.  **Added Interfaces:** Created interfaces for Props and State to add type safety
4.  **Typed Components:** Used React.FC for functional and Component<Props, State> for class components
5.  **Compiled and Tested:** Ran `tsc --noEmit` to check for errors, then `npm start`

## Code 01: Greeting (Functional Component)

### Before (JavaScript) - The Problem:
`const Greeting = ({ name }) => { ... }`
TypeScript doesn't know what `name` is. It could be string, number, anything. No error checking.

### After (TypeScript) - The Solution:
```typescript
interface GreetingProps {
  name: string;
}
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
}