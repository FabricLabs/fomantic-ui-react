---
order: 7
---

# Nag 唠叨

```jsx
import React from 'react';
import { Nag } from 'fomantic-ui-react';

export default () => <Nag active>Look, i am a nag!</Nag>;
```

## 标题

```jsx
import React from 'react';
import { Nag } from 'fomantic-ui-react';

export default () => (
  <Nag active title="Welcome to the nag module">
    Look, i am a nag!
  </Nag>
);
```

## 固定

```jsx
import React, { useState } from 'react';
import { Nag, Button } from 'fomantic-ui-react';

export default () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Button onClick={() => setActive(true)}>运行</Button>
      <Nag active={active} complete={() => setActive(false)} fixed>
        Look, i am a fixed nag!
      </Nag>
    </>
  );
};
```

```jsx
import React, { useState } from 'react';
import { Nag, Button } from 'fomantic-ui-react';

export default () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Button onClick={() => setActive(true)}>运行</Button>
      <Nag active={active} complete={() => setActive(false)} fixed="bottom">
        Look, i am a fixed nag!
      </Nag>
    </>
  );
};
```

<API src="@/nag/Nag.tsx"></API>
