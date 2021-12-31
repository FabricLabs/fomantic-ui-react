## Icon 图标

基本用法：

```tsx
import React from 'react';
import { Icon } from 'fomantic-ui-react';

export default () => <Icon name="cloud" />;
```

## 加载

```tsx
import React from 'react';
import { Icon } from 'fomantic-ui-react';

export default () => (
  <>
    <Icon name="spinner" loading />
    <Icon name="notched circle" loading />
    <Icon name="asterisk" loading />
  </>
);
```

<API src="@/icon/index.ts"></API>
