---
order: 17
---

# Text 文本

```jsx
import React from 'react';
import { Text, Segment } from 'fomantic-ui-react';

export default () => (
  <>
    <Segment>
      This is <Text color="red" content="red" /> inline text and this is <Text color="blue" content="blue" /> inline
      text and this is <Text color="purple" content="purple" /> inline text
    </Segment>
    <Segment inverted>
      This is <Text color="red" content="red" /> inline text and this is <Text color="blue" content="blue" /> inline
      text and this is <Text color="purple" content="purple" /> inline text
    </Segment>
    <Segment>
      This is <Text color="info">info</Text> inline text and this is <Text color="success">success</Text> inline text
      and this is <Text color="warning">warning</Text> inline text and this is <Text color="error">error</Text> inline
      text
    </Segment>
    <Segment inverted>
      This is <Text color="info">info</Text> inline text and this is <Text color="success">success</Text> inline text
      and this is <Text color="warning">warning</Text> inline text and this is <Text color="error">error</Text> inline
      text
    </Segment>
  </>
);
```

## 尺寸

```jsx
import React from 'react';
import { Text, Segment } from 'fomantic-ui-react';

export default () => (
  <>
    <Segment>
      <p>
        Starting with <Text color="red" size="mini" content="mini" /> text
      </p>
      <p>
        which turns into <Text color="red" size="tiny" content="tiny" /> text
      </p>
      <p>
        changing to <Text color="red" size="small" content="small" /> text until it is
      </p>
      <p>
        the default <Text color="red" size="medium" content="medium" /> text
      </p>
      <p>
        and could be <Text color="red" size="large" content="large" /> text
      </p>
      <p>
        to turn into <Text color="red" size="big" content="big" /> text
      </p>
      <p>
        then growing to <Text color="red" size="huge" content="huge" /> text
      </p>
      <p>
        to finally become <Text color="red" size="massive" content="massive" /> text
      </p>
    </Segment>
  </>
);
```

<API src="@/text/Text.tsx"></API>
