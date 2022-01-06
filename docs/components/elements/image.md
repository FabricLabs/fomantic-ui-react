---
order: 7
---

# Image 图片

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="small" />;
```

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="small" wrapped />;
```

## 链接

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="medium" href="https://www.baidu.com" target="_blank" />;
```

## 隐藏

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="small" hidden />;
```

## 禁用

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="small" disabled />;
```

## 头像

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <div>
    <Image src="/images/image.png" avatar />
    <span>Username</span>
  </div>
);
```

## 边框

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/white-image.png" size="medium" bordered />;
```

## 流式布局

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" bordered />;
```

## 圆角

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="medium" rounded />;
```

## 圆形

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/square-image.png" size="medium" circular />;
```

## 垂直对齐

```jsx
import React from 'react';
import { Image, Divider } from 'fomantic-ui-react';

export default () => (
  <>
    <Image src="/images/square-image.png" size="tiny" verticalAlign="top" />
    <span>Top Aligned</span>
    <Divider />
    <Image src="/images/square-image.png" size="tiny" verticalAlign="middle" />
    <span>Middle Aligned</span>
    <Divider />
    <Image src="/images/square-image.png" size="tiny" verticalAlign="bottom" />
    <span>Bottom Aligned</span>
  </>
);
```

## 居中

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => <Image src="/images/image.png" size="small" centered />;
```

## 尺寸

| Name    | Size  |
| ------- | ----- |
| Mini    | 35px  |
| Tiny    | 80px  |
| Small   | 150px |
| Medium  | 300px |
| Large   | 450px |
| Big     | 600px |
| Huge    | 800px |
| Massive | 960px |

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Image size="mini" src="/images/image.png" />
    <br />
    <Image size="tiny" src="/images/image.png" />
    <br />
    <Image size="small" src="/images/image.png" />
    <br />
    <Image size="medium" src="/images/image.png" />
    <br />
    <Image size="large" src="/images/image.png" />
    <br />
    <Image size="big" src="/images/image.png" />
    <br />
    <Image size="huge" src="/images/image.png" />
    <br />
    <Image size="massive" src="/images/image.png" />
  </>
);
```

## Children

```jsx
import React from 'react';
import { Image, Label } from 'fomantic-ui-react';

export default () => <Image size="small" content={<Label content="Image not found!" icon="warning" />} />;
```

## 图片组

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <Image.Group size="tiny">
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
  </Image.Group>
);
```

```jsx
import React from 'react';
import { Image } from 'fomantic-ui-react';

export default () => (
  <Image.Group size="small">
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
    <Image src="/images/image.png" />
  </Image.Group>
);
```

## API

### **Image**<Badge>API</Badge>

<API src="@/image/Image.tsx" hideTitle></API>

### **ImageGroup**<Badge>API</Badge>

<API src="@/image/ImageGroup.tsx" hideTitle></API>
