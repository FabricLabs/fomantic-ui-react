# Rail 侧栏

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
    <Rail position="left">
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right">
      <Segment>Right Rail Content</Segment>
    </Rail>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
);
```

## 内部

```jsx
import React from 'react';
import { Rail, Segment } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <Rail position="left" internal>
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" internal>
      <Segment>Right Rail Content</Segment>
    </Rail>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Segment>
);
```

## 分割线

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
    <Rail position="left" dividing>
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" dividing>
      <Segment>Right Rail Content</Segment>
    </Rail>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
);
```

## 贴上

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
    <Rail position="left" attached>
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" attached>
      <Segment>Right Rail Content</Segment>
    </Rail>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
);
```

```jsx
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <Rail position="left" attached internal>
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" attached internal>
      <Segment>Right Rail Content</Segment>
    </Rail>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Segment>
);
```

## 靠近

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
    <Rail position="left" close>
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" close>
      <Segment>Right Rail Content</Segment>
    </Rail>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
);
```

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Rail, Segment, Placeholder } from 'fomantic-ui-react';

export default () => (
  <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
    <Rail position="left" close="very">
      <Segment>Left Rail Content</Segment>
    </Rail>
    <Rail position="right" close="very">
      <Segment>Right Rail Content</Segment>
    </Rail>
    <Placeholder>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  </Segment>
);
```

<API src="../../src/rail/Rail.tsx"></API>
