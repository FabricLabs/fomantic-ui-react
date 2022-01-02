---
order: 3
---

# Emoji 表情符号

表情符号集包含所有 Unicode 12.1 表情符号字符

```jsx
import React from 'react';
import { Emoji } from 'fomantic-ui-react';

export default () => (
  <>
    <Emoji name="anguished" />
    <Emoji name=":anguished:" />
  </>
);
```

## 禁用

```jsx
import React from 'react';
import { Emoji } from 'fomantic-ui-react';

export default () => <Emoji name="anguished" disabled />;
```

## 加载

```jsx
import React from 'react';
import { Emoji } from 'fomantic-ui-react';

export default () => (
  <>
    <Emoji name="angel" loading />
    <Emoji name="blush" loading />
    <Emoji name="grin" loading />
  </>
);
```

## 尺寸

```jsx
import React from 'react';
import { Emoji } from 'fomantic-ui-react';

export default () => (
  <>
    <Emoji name="relaxed" />
    <Emoji name="relaxed" size="small" />
    <Emoji name="relaxed" size="medium" />
    <Emoji name="relaxed" size="large" />
    <Emoji name="relaxed" size="big" />
  </>
);
```

## 链接

```jsx
import React from 'react';
import { Emoji } from 'fomantic-ui-react';

export default () => <Emoji name="anguished" link />;
```

<API src="@/emoji/Emoji.tsx"></API>
