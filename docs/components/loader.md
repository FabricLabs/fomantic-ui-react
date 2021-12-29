## Loader 加载

```jsx
import React from 'react';
import { Loader, Segment, Dimmer } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
);
```

## 文本

```jsx
import React from 'react';
import { Loader, Segment, Dimmer } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Dimmer active>
      <Loader text>Loading</Loader>
    </Dimmer>
  </Segment>
);
```

```jsx
import React from 'react';
import { Loader, Segment, Dimmer } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Dimmer active inverted>
      <Loader text>Loading</Loader>
    </Dimmer>
  </Segment>
);
```

## 不确定

```jsx
import React from 'react';
import { Loader, Segment, Dimmer } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Dimmer active inverted>
      <Loader text indeterminate>
        Preparing Files
      </Loader>
    </Dimmer>
  </Segment>
);
```

## 积极

```jsx
import React from 'react';
import { Loader, Segment, Dimmer } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Loader active />
  </Segment>
);
```

## 禁用

```jsx
import React from 'react';
import { Loader, Segment } from 'fomantic-ui-react';

export default () => (
  <Segment>
    <p>a</p>
    <Loader disabled />
  </Segment>
);
```

## 内联

```jsx
import React from 'react';
import { Loader } from 'fomantic-ui-react';

export default () => <Loader inline active />;
```

## 内联居中

```jsx
import React from 'react';
import { Loader } from 'fomantic-ui-react';

export default () => <Loader inline="centered" active />;
```

## 速度

```jsx
import React from 'react';
import { Loader } from 'fomantic-ui-react';

export default () => (
  <>
    <Loader speed="slow" inline active />
    <Loader inline active />
    <Loader speed="fast" inline active />
  </>
);
```

## 颜色

```jsx
import React from 'react';
import { Loader } from 'fomantic-ui-react';

export default () => (
  <>
    <Loader color="primary" inline active />
    <Loader color="secondary" inline active />
    <Loader color="red" inline active />
    <Loader color="orange" inline active />
    <Loader color="yellow" inline active />
    <Loader color="olive" inline active />
    <Loader color="green" inline active />
    <Loader color="teal" inline active />
    <Loader color="blue" inline active />
    <Loader color="violet" inline active />
    <Loader color="purple" inline active />
    <Loader color="pink" inline active />
    <Loader color="brown" inline active />
    <Loader color="grey" inline active />
    <Loader color="black" inline active />
  </>
);
```

## 样式

```jsx
import React from 'react';
import { Loader, Segment } from 'fomantic-ui-react';

export default () => (
  <>
    <Segment>
      <Loader styles="double" speed="slow" color="green" active />
      <br />
      <br />
      <br />
    </Segment>
    <Segment>
      <Loader styles="elastic" color="blue" active />
      <br />
      <br />
      <br />
    </Segment>
  </>
);
```

<API src="../../src/loader/Loader.tsx"></API>
