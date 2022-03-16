---
order: 12
---

# Shape 形状

```jsx
import React, { useState } from 'react';
import { Shape, Button, Header } from 'fomantic-ui-react';

export default () => {
  const [change, setChange] = useState(false);
  const [behavior, setBehavior] = useState();

  const handleLeftClick = () => {
    setBehavior('flip left');
    setChange(true);
  };

  const handleTopClick = () => {
    setBehavior('flip up');
    setChange(true);
  };

  const handleDownClick = () => {
    setBehavior('flip down');
    setChange(true);
  };

  const handleRightClick = () => {
    setBehavior('flip right');
    setChange(true);
  };

  const handleOverClick = () => {
    setBehavior('flip over');
    setChange(true);
  };

  const handleBackClick = () => {
    setBehavior('flip back');
    setChange(true);
  };

  return (
    <>
      <Button onClick={handleLeftClick}>Left</Button>
      <Button onClick={handleTopClick}>Top</Button>
      <Button onClick={handleDownClick}>Down</Button>
      <Button onClick={handleRightClick}>Right</Button>
      <Button onClick={handleOverClick}>Over</Button>
      <Button onClick={handleBackClick}>Back</Button>
      <br />
      <Shape behavior={behavior} type="text" change={change} onComplete={() => setChange(false)}>
        <Shape.Sides>
          <Shape.Side as={Header}>Did you know? This side starts visible.</Shape.Side>
          <Shape.Side as={Header}>Help, its another side!</Shape.Side>
          <Shape.Side as={Header}>This is the last side</Shape.Side>
        </Shape.Sides>
      </Shape>
    </>
  );
};
```

## 立方体

```jsx
import React, { useState } from 'react';
import { Shape, Button, Header } from 'fomantic-ui-react';

export default () => {
  const [change, setChange] = useState(false);
  const [behavior, setBehavior] = useState();

  const handleLeftClick = () => {
    setBehavior('flip left');
    setChange(true);
  };

  const handleTopClick = () => {
    setBehavior('flip up');
    setChange(true);
  };

  const handleDownClick = () => {
    setBehavior('flip down');
    setChange(true);
  };

  const handleRightClick = () => {
    setBehavior('flip right');
    setChange(true);
  };

  const handleOverClick = () => {
    setBehavior('flip over');
    setChange(true);
  };

  const handleBackClick = () => {
    setBehavior('flip back');
    setChange(true);
  };

  return (
    <>
      <Button onClick={handleLeftClick}>Left</Button>
      <Button onClick={handleTopClick}>Top</Button>
      <Button onClick={handleDownClick}>Down</Button>
      <Button onClick={handleRightClick}>Right</Button>
      <Button onClick={handleOverClick}>Over</Button>
      <Button onClick={handleBackClick}>Back</Button>
      <br />
      <br />
      <Shape behavior={behavior} type="cube" change={change} onComplete={() => setChange(false)}>
        <Shape.Sides>
          <Shape.Side>
            <div className="content">
              <div className="center">1</div>
            </div>
          </Shape.Side>
          <Shape.Side>
            <div className="content">
              <div className="center">2</div>
            </div>
          </Shape.Side>
          <Shape.Side>
            <div className="content">
              <div className="center">3</div>
            </div>
          </Shape.Side>
          <Shape.Side>
            <div className="content">
              <div className="center">4</div>
            </div>
          </Shape.Side>
          <Shape.Side>
            <div className="content">
              <div className="center">5</div>
            </div>
          </Shape.Side>
          <Shape.Side>
            <div className="content">
              <div className="center">6</div>
            </div>
          </Shape.Side>
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
