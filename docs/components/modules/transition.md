---
order: 7
---

# Transition 过渡

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition
        as={Image}
        animation="scale"
        visible={visible}
        onStart={() => setDisabled(true)}
        onComplete={() => setDisabled(false)}
        src="/images/1.png"
        size="medium"
        centered
      />
      <Button content={visible ? 'Hide' : 'Show'} disabled={disabled} onClick={handleClick} />
    </>
  );
};
```

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition
        as={Image}
        animation="horizontal flip"
        duration={{ hide: 600, show: 3000 }}
        visible={visible}
        src="/images/1.png"
        size="medium"
        centered
        onStart={() => setDisabled(true)}
        onComplete={() => setDisabled(false)}
      />
      <Button content={visible ? 'Hide' : 'Show'} disabled={disabled} onClick={handleClick} />
    </>
  );
};
```

<API src="@/transition/Transition.tsx"></API>
