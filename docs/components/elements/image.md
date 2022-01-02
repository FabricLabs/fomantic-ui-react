---
order: 7
---

# Image 图片

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="small" />;
```

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="small" wrapped />;
```

## 链接

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <Image
    src="https://fomantic-ui.com/images/wireframe/image.png"
    size="medium"
    href="https://www.baidu.com"
    target="_blank"
  />
);
```

## 隐藏

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="small" hidden />;
```

## 禁用

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="small" disabled />;
```

## 头像

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <div>
    <Image src="https://fomantic-ui.com/images/wireframe/image.png" avatar />
    <span>Username</span>
  </div>
);
```

## 边框

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/white-image.png" size="medium" bordered />;
```

## 流式布局

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" bordered />;
```

## 圆角

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="medium" rounded />;
```

## 圆形

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/square-image.png" size="medium" circular />;
```

## 垂直对齐

```jsx
import React from 'react';
import { Image, Divider } from 'fomantic-ui-react';

export default () => (
  <>
    <Image src="https://fomantic-ui.com/images/wireframe/square-image.png" size="tiny" verticalAlign="top" />
    <span>Top Aligned</span>
    <Divider />
    <Image src="https://fomantic-ui.com/images/wireframe/square-image.png" size="tiny" verticalAlign="middle" />
    <span>Middle Aligned</span>
    <Divider />
    <Image src="https://fomantic-ui.com/images/wireframe/square-image.png" size="tiny" verticalAlign="bottom" />
    <span>Bottom Aligned</span>
  </>
);
```

## 居中

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="https://fomantic-ui.com/images/wireframe/image.png" size="small" centered />;
```

<API src="@/image/Image.tsx"></API>
