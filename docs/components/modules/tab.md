---
order: 16
---

# Tab 标签页

```jsx
import React from 'react';
import { Tab } from 'fomantic-ui-react';

export default () => (
  <Tab>
    <Tab.Pane tab="tab 1">Content of Tab Pane 1</Tab.Pane>
    <Tab.Pane tab="tab 2">Content of Tab Pane 2</Tab.Pane>
    <Tab.Pane tab="tab 3">Content of Tab Pane 3</Tab.Pane>
  </Tab>
);
```

## 样式类型

```jsx
import React from 'react';
import { Tab } from 'fomantic-ui-react';

export default () => (
  <Tab type="line">
    <Tab.Pane tab="tab 1">Content of Tab Pane 1</Tab.Pane>
    <Tab.Pane tab="tab 2">Content of Tab Pane 2</Tab.Pane>
    <Tab.Pane tab="tab 3">Content of Tab Pane 3</Tab.Pane>
  </Tab>
);
```

```jsx
import React from 'react';
import { Tab } from 'fomantic-ui-react';

export default () => (
  <Tab type="button">
    <Tab.Pane tab="tab 1">Content of Tab Pane 1</Tab.Pane>
    <Tab.Pane tab="tab 2">Content of Tab Pane 2</Tab.Pane>
    <Tab.Pane tab="tab 3">Content of Tab Pane 3</Tab.Pane>
  </Tab>
);
```

## 多个选项卡组

```jsx
import React from 'react';
import { Tab } from 'fomantic-ui-react';

export default () => (
  <Tab type="button">
    <Tab.Pane tab="tab 1">
      <Tab>
        <Tab.Pane tab="1A">Content of Tab Pane 1A</Tab.Pane>
        <Tab.Pane tab="1B">Content of Tab Pane 1B</Tab.Pane>
        <Tab.Pane tab="1C">Content of Tab Pane 1C</Tab.Pane>
      </Tab>
    </Tab.Pane>
    <Tab.Pane tab="tab 2">
      <Tab>
        <Tab.Pane tab="2A">Content of Tab Pane 2A</Tab.Pane>
        <Tab.Pane tab="2B">Content of Tab Pane 2B</Tab.Pane>
        <Tab.Pane tab="2C">Content of Tab Pane 2C</Tab.Pane>
      </Tab>
    </Tab.Pane>
    <Tab.Pane tab="tab 3">
      <Tab>
        <Tab.Pane tab="3A">Content of Tab Pane 3A</Tab.Pane>
        <Tab.Pane tab="3B">Content of Tab Pane 3B</Tab.Pane>
        <Tab.Pane tab="3C">Content of Tab Pane 3C</Tab.Pane>
      </Tab>
    </Tab.Pane>
  </Tab>
);
```

## API

### **Tab**<Badge>API</Badge>

<API src="@/tab/Tab.tsx" hideTitle></API>

### **TabPane**<Badge>API</Badge>

<API src="@/tab/TabPane.tsx" hideTitle></API>
