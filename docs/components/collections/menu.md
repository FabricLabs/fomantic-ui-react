# Menu 菜单

```jsx
import React from 'react';
import { Menu, Icon } from 'fomantic-ui-react';

export default () => (
  <Menu text>
    <Menu.Item>
      <img src="/images/new-school.jpg" />
    </Menu.Item>
    <Menu.Item as="a">
      Browse Courses
      <Icon name="dropdown" />
    </Menu.Item>
  </Menu>
);
```

## API

### **Menu**<Badge>API</Badge>

<API src="@/menu/Menu.tsx" hideTitle></API>
