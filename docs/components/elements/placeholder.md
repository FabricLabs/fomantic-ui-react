---
order: 12
---

# Placeholder 占位

```jsx
import React from 'react';
import { Placeholder } from 'fomantic-ui-react';

export default () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);
```

## 头部

```jsx
import React from 'react';
import { Placeholder, Divider } from 'fomantic-ui-react';

export default () => (
  <>
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>

    <Divider />

    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  </>
);
```

## 图片

```jsx
import React from 'react';
import { Placeholder } from 'fomantic-ui-react';

export default () => (
  <Placeholder>
    <Placeholder.Image />
  </Placeholder>
);
```

## 长度

```jsx
import React from 'react';
import { Placeholder } from 'fomantic-ui-react';

export default () => (
  <Placeholder>
    <Placeholder.Line length="full" />
    <Placeholder.Line length="very long" />
    <Placeholder.Line length="long" />
    <Placeholder.Line length="medium" />
    <Placeholder.Line length="short" />
    <Placeholder.Line length="very short" />
  </Placeholder>
);
```

## API

### **Placeholder**<Badge>API</Badge>

<API src="@/placeholder/Placeholder.tsx" hideTitle></API>

### **PlaceholderHeader**<Badge>API</Badge>

<API src="@/placeholder/PlaceholderHeader.tsx" hideTitle></API>

### **PlaceholderLine**<Badge>API</Badge>

<API src="@/placeholder/PlaceholderLine.tsx" hideTitle></API>

### **PlaceholderImage**<Badge>API</Badge>

<API src="@/placeholder/PlaceholderImage.tsx" hideTitle></API>

### **PlaceholderParagraph**<Badge>API</Badge>

<API src="@/placeholder/PlaceholderParagraph.tsx" hideTitle></API>
