---
group:
  path: /components/addons
  title: 插件
order: 0
---

# ConfigProvider 全局化配置

为组件提供统一的全局化配置。

```jsx
import React from 'react';
import { ConfigProvider, Button } from 'fomantic-ui-react';
// import 'fomantic-ui-react/es/style/css';
// import 'fomantic-ui-react/es/button/style/css'

export default () => (
  <ConfigProvider>
    <Button content="button" />
  </ConfigProvider>
);
```

<API src="@/configProvider/ConfigProvider.tsx"></API>
