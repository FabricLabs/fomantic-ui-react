---
order: 9
---

# Label 标签

```jsx
import React from 'react';
import { Label, Icon } from 'fomantic-ui-react';

export default () => (
  <Label>
    <Icon name="mail" />
    23
  </Label>
);
```

## 图片头像

```jsx
import React from 'react';
import { Label } from 'fomantic-ui-react';

export default () => (
  <>
    <Label as="a" image>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" />
      Joe
    </Label>
    <Label as="a" image>
      <img src="https://fomantic-ui.com/images/avatar/small/elliot.jpg" />
      Elliot
    </Label>
    <Label as="a" image>
      <img src="https://fomantic-ui.com/images/avatar/small/stevie.jpg" />
      Stevie
    </Label>
  </>
);
```

```jsx
import React from 'react';
import { Label } from 'fomantic-ui-react';

export default () => (
  <>
    <Label as="a" color="blue" image>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" />
      Joe
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as="a" color="teal" image>
      <img src="https://fomantic-ui.com/images/avatar/small/elliot.jpg" />
      Elliot
      <Label.Detail content="Student" />
    </Label>
    <Label as="a" color="yellow" image>
      <img src="https://fomantic-ui.com/images/avatar/small/stevie.jpg" />
      Stevie
      <Label.Detail content="Co-worker" />
    </Label>
  </>
);
```

```jsx
import React from 'react';
import { Label, Icon } from 'fomantic-ui-react';

export default () => (
  <>
    <Label image>
      <img src="https://fomantic-ui.com/images/avatar/small/joe.jpg" />
      Joe
      <Icon name="delete" />
    </Label>
    <Label image>
      <img src="https://fomantic-ui.com/images/avatar/small/elliot.jpg" />
      Elliot
      <Icon name="delete" />
    </Label>
    <Label image>
      <img src="https://fomantic-ui.com/images/avatar/small/stevie.jpg" />
      Stevie
      <Icon name="delete" />
    </Label>
  </>
);
```

## API

### **Label**<Badge>API</Badge>

<API src="@/label/Label.tsx" hideTitle></API>

### **Label.Detail**<Badge>API</Badge>

<API src="@/label/LabelDetail.tsx" hideTitle></API>
