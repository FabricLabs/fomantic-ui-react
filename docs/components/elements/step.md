---
order: 16
---

# Step 步骤

一个单一步骤：

```jsx
import React from 'react';
import { Step } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step>Shipping</Step>
  </Step.Group>
);
```

## 步骤组

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name="info" />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 序号

```jsx
import React from 'react';
import { Step } from 'fomantic-ui-react';

export default () => (
  <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 垂直

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group vertical>
    <Step completed>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step completed>
      <Icon name="credit card" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name="info" />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group vertical="right">
    <Step completed>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step completed>
      <Icon name="credit card" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name="info" />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 描述

```jsx
import React from 'react';
import { Step } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step>
      <Step.Title>Shipping</Step.Title>
      <Step.Description>Choose your shipping options</Step.Description>
    </Step>
  </Step.Group>
);
```

## 图标

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 链接

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step as="a" active>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step as="a">
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step link>
      <Icon name="truck" />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step link>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 激活

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step active>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 完成

```jsx
import React from 'react';
import { Step, Icon } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step completed>
      <Icon name="payment" />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

```jsx
import React from 'react';
import { Step } from 'fomantic-ui-react';

export default () => (
  <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
```

## 禁用

```jsx
import React from 'react';
import { Step } from 'fomantic-ui-react';

export default () => (
  <Step.Group>
    <Step disabled>Billing</Step>
  </Step.Group>
);
```

## API

### **Step**<Badge>API</Badge>

<API src="@/step/Step.tsx" hideTitle></API>

### **StepGroup**<Badge>API</Badge>

<API src="@/step/StepGroup.tsx" hideTitle></API>

### **StepContent**<Badge>API</Badge>

<API src="@/step/StepContent.tsx" hideTitle></API>

### **StepTitle**<Badge>API</Badge>

<API src="@/step/StepTitle.tsx" hideTitle></API>

### **StepDescription**<Badge>API</Badge>

<API src="@/step/StepDescription.tsx" hideTitle></API>
