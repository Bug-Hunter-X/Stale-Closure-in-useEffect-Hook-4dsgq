```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, now with correct dependency
    console.log('Count:', count);
    return () => {
      // Cleanup function (runs before the next effect)
      console.log('Cleanup');
    };
  }, [count]); // count is added as a dependency

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```