# :anchor: React Hooks
React provides special functions that let you use state and lifecycle features in functional components to eliminate the need for class components and make code more reusable and concise. This functions are which react called *hooks*.


## :file_folder: Hooks Categories
Here’s a complete list of React hooks, including the new ones introduced in React 19:

### Core Hooks
- `useState`: Manages local component state.
- `useEffect`: Handles side effects in function components.
- `useContext`: Accesses values from a React Context.

### Performance Optimization Hooks
- `useMemo`: Caches the result of an expensive calculation.
- `useCallback`: Caches a function definition to avoid unnecessary re-renders.
- `useTransition`: Defers state updates to maintain UI responsiveness.
- `useDeferredValue`: Defers a value update to prevent performance issues.

### Reference and DOM Hooks
- `useRef`: Creates a mutable reference to a DOM element or a value that persists across renders.
- `useImperativeHandle`: Customizes the instance value of a ref.
- `useLayoutEffect`: Runs effects synchronously after DOM mutations.
- `useInsertionEffect`: Runs synchronously before React makes changes to the DOM (useful for CSS-in-JS libraries).

### Experimental & Server-Specific Hooks
- `useSyncExternalStore`: Synchronizes state with an external store.
- `useId`: Generates a unique ID for accessibility purposes.
- `useHookState (RSC)`: Manages state in React Server Components.

### React 19 New Hooks
- `use`: Suspends a component until a promise (or other asynchronous resource) resolves.
- `useOptimistic`: Provides an optimistic update mechanism for UI interactions.
- `useActionState`: Simplifies handling UI state for server actions in React Server Components (RSC).
- `useFormStatus`: Tracks the submission state of a form.
- `useFormState`: Manages form state based on server actions.
- `useEffectEvent`: Preserves the latest function inside useEffect without dependencies.


## :link: Helpful Links
- [React Hooks References](https://react.dev/reference/react/hooks)