---
order: 7
---

# Transition 过渡

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition as={Image} animation="scale" visible={visible} src="/images/1.png" size="medium" centered />
      <Button content={visible ? 'Hide' : 'Show'} onClick={handleClick} />
    </>
  );
};
```

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition as={Image} animation="horizontal flip" visible={visible} src="/images/1.png" size="medium" centered />
      <Button content={visible ? 'Hide' : 'Show'} onClick={handleClick} />
    </>
  );
};
```

<API src="@/transition/Transition.tsx"></API>
