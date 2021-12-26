## Button 按钮

Demo:

```jsx
import React from 'react';
import { Button } from 'fomantic-ui-react';

export default () => (
  <>
    <Button>按钮</Button>
    <Button content="按钮" />
  </>
);
```

## 动画

```jsx
import React from 'react';
import { Button, Icon } from 'fomantic-ui-react';

export default () => (
  <>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name="right arrow" />
      </Button.Content>
    </Button>

    <Button animated="vertical">
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>

    <Button animated="fade">
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </>
);
```

## 图标

```jsx
import React from 'react';
import { Button } from 'fomantic-ui-react';

export default () => <Button icon="cloud" />;
```

## Basic

```jsx
import React from 'react';
import { Button, Icon } from 'fomantic-ui-react';

export default () => (
  <Button basic>
    <Icon name="user" />
    Add Friend
  </Button>
);
```

```jsx
import React from 'react';
import { Button } from 'fomantic-ui-react';

export default () => (
  <>
    <Button color="primary" basic>
      Primary
    </Button>
    <Button color="secondary" basic>
      Secondary
    </Button>
    <Button color="red" basic>
      Red
    </Button>
    <Button color="orange" basic>
      Orange
    </Button>
    <Button color="yellow" basic>
      Yellow
    </Button>
    <Button color="olive" basic>
      Olive
    </Button>
    <Button color="green" basic>
      Green
    </Button>
    <Button color="teal" basic>
      Teal
    </Button>
    <Button color="blue" basic>
      Blue
    </Button>
    <Button color="violet" basic>
      Violet
    </Button>
    <Button color="purple" basic>
      Purple
    </Button>
    <Button color="pink" basic>
      Pink
    </Button>
    <Button color="brown" basic>
      Brown
    </Button>
    <Button color="grey" basic>
      Grey
    </Button>
    <Button color="black" basic>
      Black
    </Button>
  </>
);
```

## Button API

<API src="../../src/button/Button.tsx" hideTitle></API>

## Button.Content API

<API src="../../src/button/ButtonContent.tsx" hideTitle></API>
