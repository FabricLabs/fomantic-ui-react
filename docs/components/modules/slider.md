---
order: 14
---

# Slider 滑动条

```jsx
import React, { useState } from 'react';
import { Slider, Input } from 'fomantic-ui-react';

export default () => {
  const [value, setValue] = useState();
  return (
    <>
      <Slider start={9} onChange={(value) => setValue(value)} />
      <Input value={value} disabled />
    </>
  );
};
```

## 刻度

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

export default () => <Slider start={3} max={10} labeled />;
```

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

export default () => <Slider start={3} max={10} labeled labelButtom />;
```

## 标记线

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

export default () => <Slider start={3} max={10} labeled ticked />;
```

## 自定义显示刻度

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

const labels = [
  'α',
  'β',
  'γ',
  'δ',
  'ε',
  'ζ',
  'η',
  'θ',
  'ι',
  'κ',
  'λ',
  'μ',
  'ν',
  'ξ',
  'ο',
  'π',
  'ρ',
  'σ/ς',
  'τ',
  'υ',
  'φ',
  'χ',
  'ψ',
  'ω',
];

export default () => (
  <Slider
    max={20}
    start={3}
    labeled
    ticked
    interpretLabel={(value) => {
      return labels[value];
    }}
  />
);
```

## 垂直

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

export default () => <Slider start={10} vertical style={{ height: '220px' }} />;
```

## 禁用

```jsx
import React, { useState } from 'react';
import { Slider } from 'fomantic-ui-react';

export default () => <Slider start={10} disabled />;
```

## 反转

```jsx
import React, { useState } from 'react';
import { Slider, Segment } from 'fomantic-ui-react';

export default () => (
  <Segment inverted>
    <Slider start={10} inverted />
  </Segment>
);
```

<API src="@/slider/Slider.tsx"></API>
