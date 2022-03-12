---
order: 12
---

# Shape 形状

```jsx
import React, { useState } from 'react';
import { Shape, Button } from 'fomantic-ui-react';

export default () => {
  const [change, setChange] = useState(false);

  const handleClick = () => {
    setChange(true);
  };
  return (
    <>
      <Button onClick={handleClick}>Top</Button>
      <br />
      <Shape type="text" change={change}>
        <Shape.Sides>
          <Shape.Side>Did you know? This side starts visible.</Shape.Side>
          <Shape.Side>Help, its another side!</Shape.Side>
          <Shape.Side>This is the last side</Shape.Side>
        </Shape.Sides>
      </Shape>
    </>
  );
};
```

## API

### **Shape**<Badge>API</Badge>

<API src="@/shape/Shape.tsx" hideTitle></API>

### **ShapeSides**<Badge>API</Badge>

<API src="@/shape/ShapeSides.tsx" hideTitle></API>

### **ShapeSide**<Badge>API</Badge>

<API src="@/shape/ShapeSide.tsx" hideTitle></API>
