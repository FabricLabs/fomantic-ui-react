---
order: 6
---

# Modal 弹出层

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'fomantic-ui-react';

export default () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Show Modal</Button>
      <Modal active={active} onClose={handleClose} />
    </>
  );
};
```

<API src="@/modal/Modal.tsx"></API>
