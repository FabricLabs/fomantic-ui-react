---
order: 10
---

# Rating 评级

```jsx
import React from 'react';
import { Rating } from 'fomantic-ui-react';

export default () => <Rating />;
```

## 图标

```jsx
import React from 'react';
import { Rating } from 'fomantic-ui-react';

export default () => (
  <>
    <Rating icon="star" color="yellow" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="heart" color="red" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="female" color="purple" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="male" color="blue" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="cloud" color="grey" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="cat" color="pink" max={4} rating={2} />
    <br />
    <br />
    <Rating icon="circle" color="orange" max={4} rating={2} />
  </>
);
```

## 颜色

```jsx
import React from 'react';
import { Rating } from 'fomantic-ui-react';

export default () => (
  <>
    <Rating color="red" max={7} rating={1} />
    <br />
    <br />
    <Rating color="orange" max={7} rating={2} />
    <br />
    <br />
    <Rating color="yellow" max={7} rating={3} />
    <br />
    <br />
    <Rating color="olive" max={7} rating={4} />
    <br />
    <br />
    <Rating color="green" max={7} rating={5} />
    <br />
    <br />
    <Rating color="teal" max={7} rating={6} />
    <br />
    <br />
    <Rating color="blue" max={7} rating={6} />
    <br />
    <br />
    <Rating color="violet" max={7} rating={5} />
    <br />
    <br />
    <Rating color="purple" max={7} rating={4} />
    <br />
    <br />
    <Rating color="pink" max={7} rating={3} />
    <br />
    <br />
    <Rating color="brown" max={7} rating={2} />
    <br />
    <br />
    <Rating color="grey" max={7} rating={1} />
    <br />
    <br />
    <Rating color="black" max={7} rating={1} />
  </>
);
```

## 禁用

```jsx
import React from 'react';
import { Rating } from 'fomantic-ui-react';

export default () => <Rating color="yellow" max={5} rating={3} disabled />;
```

## 尺寸

```jsx
import React from 'react';
import { Rating } from 'fomantic-ui-react';

export default () => (
  <>
    <Rating color="yellow" max={4} rating={3} size="mini" />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} size="tiny" />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} size="small" />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} size="large" />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} size="huge" />
    <br />
    <br />
    <Rating color="yellow" max={4} rating={3} size="massive" />
  </>
);
```

<API src="@/rating/Rating.tsx"></API>
