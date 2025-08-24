# 📘 React Interview Notes

## 🔹 Export & Import in JavaScript

There are two main ways to export/import modules:

### 1. **Default Export/Import**

- Each file can have **only one default export**.
- While importing, you can use **any name**.

```js
// utils.js
export default function add(a, b) {
  return a + b;
}

// App.js
import addNumbers from "./utils";
console.log(addNumbers(2, 3));
```

### 2. **Named Export/Import**

- A file can have **multiple named exports**.
- Must use **exact same names** while importing (unless aliased).

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// App.js
import { add, subtract } from "./math";
console.log(add(5, 3));
```

---

## 🔹 React Hooks

React Hooks are special functions that let you **use state and lifecycle features** in functional components.

- **Normal JS function** → just logic, no state.
- **React Hooks** → can manage state & re-renders.

### 1. `useState()`

- Super powerful state variable in React.
- Whenever state changes → React re-renders the component.

```js
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>;
```

### 2. `useEffect()`

- Handles **side effects** (data fetching, subscriptions, timers).
- Runs after render.

```js
useEffect(() => {
  console.log("Component mounted or updated!");
}, [count]); // runs whenever `count` changes
```

---

## 🔹 React vs Vanilla JS DOM Manipulation

| Feature                  | Vanilla JS                                               | React                                          |
| ------------------------ | -------------------------------------------------------- | ---------------------------------------------- |
| DOM Updates              | Directly manipulates the DOM (slow for frequent changes) | Uses Virtual DOM → batches updates efficiently |
| State Management         | Manual (document.querySelector, innerHTML updates)       | `useState` & props handle it automatically     |
| Code Organization        | Often unstructured                                       | Component-based, reusable                      |
| Performance Optimization | Manual (debouncing, throttling)                          | Built-in diffing & reconciliation              |

👉 **React is better at DOM manipulation** because it avoids unnecessary re-renders using **Virtual DOM** + **Reconciliation algorithm**.

---

## 🔹 Framework vs Vanilla JS

- **Vanilla JS**

  - You write everything manually (DOM selection, event listeners, updates).
  - More control but more boilerplate.
  - Best for **small apps**.

- **Framework (React, Angular, Vue)**

  - Provides structure, state management, component reusability.
  - Handles complex UI updates efficiently.
  - Best for **large-scale apps**.

---

## 🔹 Virtual DOM vs Actual DOM

- **Actual DOM**: The real browser DOM tree. Expensive to update frequently.
- **Virtual DOM**: Lightweight copy of the DOM stored in memory.

👉 React updates the Virtual DOM first, then efficiently updates only the **changed parts** in the real DOM.

---

## 🔹 React Reconciliation & Fiber

- **Reconciliation**: The process React uses to update the DOM when state/props change.
- Uses **Diffing Algorithm** → compares Virtual DOM trees.
- **Fiber Architecture (React 16+)**:

  - Makes rendering **interruptible** and **asynchronous**.
  - Breaks rendering work into **chunks (units of work)**.
  - Improves responsiveness for large apps.

---

## 🔹 Why is React Fast?

1. Uses **Virtual DOM** instead of touching actual DOM directly.
2. **Diffing Algorithm** → only updates the parts of UI that changed.
3. **Fiber** → asynchronous, efficient rendering.
4. **Component-based architecture** → easy to reuse & optimize.

---

## 🔹 Common Interview Questions & Answers

### Q1: Difference between default and named exports?

👉 Default export allows one per file, imported with any name. Named exports allow multiple per file, imported by exact names.

### Q2: Why does React re-render on state change?

👉 Because React tracks state variables with hooks like `useState()`. A change creates a new state reference, triggering reconciliation & re-render.

### Q3: What is the difference between React DOM manipulation and Vanilla JS DOM manipulation?

👉 React uses Virtual DOM & diffing (faster). Vanilla JS directly manipulates DOM nodes (slower with large updates).

### Q4: What is Virtual DOM?

👉 An in-memory representation of the UI. React updates Virtual DOM first, then reconciles it with the real DOM efficiently.

### Q5: Explain Reconciliation in React.

👉 React’s process of comparing new Virtual DOM with old Virtual DOM (diffing) and updating only the changed nodes in the real DOM.

### Q6: Why is React fast?

👉 Virtual DOM, diffing algorithm, Fiber (async rendering), and batching of updates.

---

✅ This README is now **interview-ready** with concepts + code examples + Q\&A.

Perfect ✅ — a diagram makes this super clear in interviews.
Here’s a simple **ASCII-style diagram** (textual, works in README/notes) and I can also make a **visual image diagram** if you prefer.

---

## 🖼 Virtual DOM vs Actual DOM

```
               ┌───────────────────────┐
               │   React Component UI  │
               └───────────┬───────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   Virtual DOM Tree  │   <-- lightweight copy in memory
                └─────────────────────┘
                           │
        React Diffing Algorithm (Reconciliation)
                           │
          Only updates changed nodes efficiently
                           ▼
                ┌─────────────────────┐
                │    Actual DOM       │   <-- browser's real DOM
                └─────────────────────┘
```

### How It Works:

1. You update state/props → React re-renders **Virtual DOM**.
2. React compares (diffs) the **new Virtual DOM** with the **previous Virtual DOM**.
3. Only the **changed nodes** are updated in the **Actual DOM**.
4. This makes React **fast and efficient**.

---

⚡ Example:

```jsx
// Only "count" changes in Virtual DOM
<h1>Hello Rohit</h1>
<p>Count: 1</p>  --> updated to Count: 2

// Instead of re-rendering the whole page,
// React updates only the <p> node in Actual DOM.
```
