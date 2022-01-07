---
order: 5
---

# Statistic 统计

```jsx
import React from 'react';
import { Statistic } from 'fomantic-ui-react';

export default () => (
  <Statistic>
    <Statistic.Value content="5,550" />
    <Statistic.Label content="Downloads" />
  </Statistic>
);
```

```jsx
import React from 'react';
import { Statistic } from 'fomantic-ui-react';

export default () => (
  <Statistic>
    <Statistic.Label content="Views" />
    <Statistic.Value content="40,509" />
  </Statistic>
);
```

## 统计组

```jsx
import React from 'react';
import { Statistic } from 'fomantic-ui-react';

export default () => (
  <Statistic.Group>
    <Statistic ui={false}>
      <Statistic.Value content="22" />
      <Statistic.Label content="Faves" />
    </Statistic>
    <Statistic ui={false}>
      <Statistic.Value content="31,200" />
      <Statistic.Label content="Views" />
    </Statistic>
    <Statistic ui={false}>
      <Statistic.Value content="22" />
      <Statistic.Label content="Members" />
    </Statistic>
  </Statistic.Group>
);
```

## API

### **Statistic**<Badge>API</Badge>

<API src="@/statistic/Statistic.tsx" hideTitle></API>

### **StatisticValue**<Badge>API</Badge>

<API src="@/statistic/StatisticValue.tsx" hideTitle></API>

### **StatisticLabel**<Badge>API</Badge>

<API src="@/statistic/StatisticLabel.tsx" hideTitle></API>

### **StatisticGroup**<Badge>API</Badge>

<API src="@/statistic/StatisticGroup.tsx" hideTitle></API>
