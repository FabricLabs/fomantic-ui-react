## Header 标题

```jsx
import React from 'react';
import { Header } from 'fomantic-ui-react';

export default () => (
  <>
    <Header as="h1">First header</Header>
    <Header as="h2">Second header</Header>
    <Header as="h3">Third header</Header>
    <Header as="h4">Fourth header</Header>
    <Header as="h5">Fifth header</Header>
  </>
);
```

## 尺寸

```jsx
import React from 'react';
import { Header } from 'fomantic-ui-react';

export default () => (
  <>
    <Header size="huge">First header</Header>
    <Header size="large">Second header</Header>
    <Header size="medium">Third header</Header>
    <Header size="small">Fourth header</Header>
    <Header size="tiny">Fifth header</Header>
  </>
);
```

## 图标

```jsx
import React from 'react';
import { Header, Icon } from 'fomantic-ui-react';

export default () => (
  <Header as="h2" icon>
    <Icon name="settings" />
    <Header.Content>
      Account Settings
      <Header.Sub>Manage your account settings and set e-mail preferences.</Header.Sub>
    </Header.Content>
  </Header>
);
```

```jsx
import React from 'react';
import { Header, Icon } from 'fomantic-ui-react';

export default () => (
  <Header as="h2" textAlign="center" icon>
    <Icon name="users" circular />
    Friends
  </Header>
);
```

## 子标题

```jsx
import React from 'react';
import { Header } from 'fomantic-ui-react';

export default () => (
  <div>
    <Header as="h2" sub>
      Price
    </Header>
    <span>$10.99</span>
  </div>
);
```

## API

### Header

<API src="../../../src/header/Header.tsx" hideTitle></API>

### HeaderContent

<API src="../../../src/header/HeaderContent.tsx" hideTitle></API>

### HeaderSub

<API src="../../../src/header/HeaderSub.tsx" hideTitle></API>
