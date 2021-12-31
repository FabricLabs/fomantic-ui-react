---
group:
  path: /components/collections
  title: 组合
---

# Breadcrumb 面包屑导航

```jsx
import React from 'react';
import { Breadcrumb } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item link>Home</Breadcrumb.Item>
    <Breadcrumb.Item link>Store</Breadcrumb.Item>
    <Breadcrumb.Item active>T-Shirt</Breadcrumb.Item>
  </Breadcrumb>
);
```

```jsx
import React from 'react';
import { Breadcrumb, Icon } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb divider={<Icon name="right angle" />}>
    <Breadcrumb.Item link>Home</Breadcrumb.Item>
    <Breadcrumb.Item link>Base</Breadcrumb.Item>
    <Breadcrumb.Item active>Search</Breadcrumb.Item>
  </Breadcrumb>
);
```

## 分割符

```jsx
import React from 'react';
import { Breadcrumb } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb divider="">
    <Breadcrumb.Item link>Home</Breadcrumb.Item>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Item link>Base</Breadcrumb.Item>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Item active>Search</Breadcrumb.Item>
  </Breadcrumb>
);
```

```jsx
import React from 'react';
import { Breadcrumb, Icon } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb divider="">
    <Breadcrumb.Item link>Home</Breadcrumb.Item>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Item link>Base</Breadcrumb.Item>
    <Breadcrumb.Divider as={Icon} name="right arrow" />
    <Breadcrumb.Item active>Search</Breadcrumb.Item>
  </Breadcrumb>
);
```

## 节

```jsx
import React from 'react';
import { Breadcrumb } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Search</Breadcrumb.Item>
  </Breadcrumb>
);
```

## 链接

```jsx
import React from 'react';
import { Breadcrumb } from 'fomantic-ui-react';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item link>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>
      Search for: <a href="#">paper towels</a>
    </Breadcrumb.Item>
  </Breadcrumb>
);
```

## API

### **Breadcrumb**<Badge>API</Badge>

<API src="@/breadcrumb/Breadcrumb.tsx" hideTitle></API>

### **BreadcrumbItem**<Badge>API</Badge>

<API src="@/breadcrumb/BreadcrumbItem.tsx" hideTitle></API>

### **BreadcrumbDivider**<Badge>API</Badge>

<API src="@/breadcrumb/BreadcrumbDivider.tsx" hideTitle></API>
