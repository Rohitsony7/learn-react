Here’s a **very short `README.md`** covering those points:

````markdown
# React Notes

## useEffect

- A React Hook used to perform **side effects** in components (e.g., API calls, event listeners).
- Runs after render by default.
- Syntax:
  ```js
  useEffect(() => {
    // side effect
    return () => {
      /* cleanup */
    };
  }, [dependencies]);
  ```
````

## API Call

- Way to **fetch data** from a server (REST, GraphQL, etc.).
- Commonly done inside `useEffect`.

## Fetch Call

- **GET** → Retrieve data

  ```js
  fetch("/api/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
  ```

- **POST** → Send data

  ```js
  fetch("/api/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Rohit" }),
  });
  ```

## What is CORS?

- **Cross-Origin Resource Sharing**
- Browser security feature that restricts requests from one domain to another.
- Server must allow it (via headers like `Access-Control-Allow-Origin`).
