## Dimmer 遮罩层

```jsx
import React, { useState } from 'react';
import { Dimmer, Segment, Button, Header } from 'fomantic-ui-react';

export default () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Dimmer.Dimmable as={Segment} dimmed={active}>
        <Header as="h3">Overlayable Section</Header>
        BalaBala
        <Dimmer active={active} />
      </Dimmer.Dimmable>

      <Button onClick={() => setActive(!active)}>Toggle</Button>
    </>
  );
};
```

<API src="../../../src/dimmer/Dimmer.tsx"></API>
