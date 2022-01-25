---
order: 2
---

# Checkbox 复选框

## Checkbox

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => <Checkbox name="example" label="Make my profile visible" />;
```

## Radio

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => <Checkbox radio name="choice" label="Radio choice" />;
```

## 滑动条

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => <Checkbox slider name="newsletter" label="Accept terms and conditions" />;
```

## 切换

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => <Checkbox toggle name="public" label="Subscribe to weekly newsletter" />;
```

## 只读

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => <Checkbox readOnly label="Read Only" />;
```

## 禁用

```jsx
import React from 'react';
import { Checkbox } from 'fomantic-ui-react';

export default () => (
  <>
    <Checkbox disabled label="Disabled" />
    <br />
    <br />
    <Checkbox disabled radio label="Disabled" />
  </>
);
```

## 合身

```jsx
import React from 'react';
import { Checkbox, Segment } from 'fomantic-ui-react';

export default () => (
  <>
    <Segment className="left floated compact">
      <Checkbox fitted />
    </Segment>
    <Segment className="left floated compact">
      <Checkbox fitted slider />
    </Segment>
    <Segment className="left floated compact">
      <Checkbox fitted toggle />
    </Segment>
  </>
);
```

## 右对齐

```jsx
import React from 'react';
import { Checkbox, Segment } from 'fomantic-ui-react';

export default () => (
  <>
    <Checkbox label="Checkbox" right checked />
    <br />
    <Checkbox label="Radio" right checked radio />
    <br />
    <Checkbox label="Slider" right checked slider />
    <br />
    <Checkbox label="Toggle" right checked toggle />
  </>
);
```

<API src="@/checkbox/Checkbox.tsx"></API>
