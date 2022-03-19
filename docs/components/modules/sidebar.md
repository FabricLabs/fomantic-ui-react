---
order: 13
---

# Sidebar 边栏

```jsx
import React, { useState } from 'react';
import { Sidebar, Menu, Segment, Header, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Toggle</Button>
      <br />
      <br />
      <Sidebar.Pushable>
        <Sidebar as={Menu} inverted vertical visible={visible}>
          <Menu.Item as="a">1</Menu.Item>
          <Menu.Item as="a">2</Menu.Item>
          <Menu.Item as="a">3</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};
```

<API src="@/sidebar/Sidebar.tsx"></API>
