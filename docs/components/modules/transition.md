---
order: 7
---

# Transition 过渡

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition
        as={Image}
        animation="scale"
        visible={visible}
        onStart={() => setDisabled(true)}
        onComplete={() => setDisabled(false)}
        src="/images/1.png"
        size="medium"
        centered
      />
      <Button content={visible ? 'Hide' : 'Show'} disabled={disabled} onClick={handleClick} />
    </>
  );
};
```

```jsx
import React, { useState } from 'react';
import { Transition, Image, Button } from 'fomantic-ui-react';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Transition
        as={Image}
        animation="horizontal flip"
        duration={{ hide: 600, show: 3000 }}
        visible={visible}
        src="/images/1.png"
        size="medium"
        centered
        onStart={() => setDisabled(true)}
        onComplete={() => setDisabled(false)}
      />
      <Button content={visible ? 'Hide' : 'Show'} disabled={disabled} onClick={handleClick} />
    </>
  );
};
```

## 组

<!-- ```jsx
import React, { useState } from 'react';
import _ from 'lodash';
import { Transition, List, Image, Button } from 'fomantic-ui-react';

export default () => {
  const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen'];
  const [items, setItems] = useState(users.slice(0, 3));

  const handleAdd = () => {
    setItems(users.slice(0, items.length + 1));
  };

  const handleRemove = () => {
    setItems(users.slice(0, items.length - 1));
  };

  return (
    <>
      <Button icon="minus" disabled={items.length === 0} onClick={handleRemove} />
      <Button icon="plus" disabled={items.length === users.length} onClick={handleAdd} />
      <Transition.Group as={List} duration={3000} divided>
        {items.map((item) => (
          <List.Item key={item}>
            <Image avatar src={`/images/avatar/small/${item}.jpg`} />
            <List.Content>
              <List.Header content={_.startCase(item)} />
            </List.Content>
          </List.Item>
        ))}
      </Transition.Group>
    </>
  );
};
``` -->

## API

### **Transition**<Badge>API</Badge>

<API src="@/transition/Transition.tsx" hideTitle></API>

### **TransitionGroup**<Badge>API</Badge>

<API src="@/transition/TransitionGroup.tsx" hideTitle></API>