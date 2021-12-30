# Reveal 揭示

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="fade">
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

```jsx
import React from 'react';
import { Reveal } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="fade" small image>
    <Reveal.Content as="img" visible src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    <Reveal.Content as="img" hidden src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
  </Reveal>
);
```

## 移动

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move">
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move right" small image>
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move up">
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move down">
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

## 旋转

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="rotate" small circular image>
    <Reveal.Content as="img" visible src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    <Reveal.Content as="img" hidden src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
  </Reveal>
);
```

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="rotate left" small circular image>
    <Reveal.Content as="img" visible src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    <Reveal.Content as="img" hidden src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
  </Reveal>
);
```

## 激活

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move left" active>
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

## 瞬间

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move" instant>
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

## 禁用

```jsx
import React from 'react';
import { Reveal, Image } from 'fomantic-ui-react';

export default () => (
  <Reveal animated="move" disabled>
    <Reveal.Content visible>
      <Image size="small" src="https://fomantic-ui.com/images/wireframe/square-image.png" />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image size="small" src="https://fomantic-ui.com/images/avatar/large/ade.jpg" />
    </Reveal.Content>
  </Reveal>
);
```

## API

### Reveal

<API src="../../../src/reveal/Reveal.tsx" hideTitle></API>

### RevealContent

<API src="../../../src/reveal/RevealContent.tsx" hideTitle></API>
