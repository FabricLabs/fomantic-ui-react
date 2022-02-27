---
order: 9
---

# Progress 进度条

```jsx
import React, { useState } from 'react';
import { Progress, Button, Icon } from 'fomantic-ui-react';

export default () => {
  const [percent, setPercent] = useState(22);
  const handleMinus = () => {
    const percentag = percent - 7;
    setPercent(percentag < 0 ? 0 : percentag);
  };
  const handlePlus = () => {
    const percentag = percent + 7;
    setPercent(percentag > 100 ? 100 : percentag);
  };

  return (
    <>
      <Progress percent={percent} label="Uploading Files" progress autoSuccess />
      <Button color="red" icon="minus" onClick={handleMinus} />
      <Button color="green" icon="plus" onClick={handlePlus} />
    </>
  );
};
```

## 指示

```jsx
import React, { useState } from 'react';
import { Progress, Button, Icon } from 'fomantic-ui-react';

export default () => {
  const [percent, setPercent] = useState(50);
  const handleMinus = () => {
    const percentag = percent - 10;
    setPercent(percentag < 0 ? 0 : percentag);
  };
  const handlePlus = () => {
    const percentag = percent + 10;
    setPercent(percentag > 100 ? 100 : percentag);
  };

  return (
    <>
      <Progress percent={percent} label="{percent}% Funding" autoSuccess indicating active />
      <Button color="red" icon="minus" onClick={handleMinus} />
      <Button color="green" icon="plus" onClick={handlePlus} />
    </>
  );
};
```

## 长条

```jsx
import React from 'react';
import { Progress } from 'fomantic-ui-react';

export default () => <Progress percent={62} />;
```

## 进度

```jsx
import React from 'react';
import { Progress } from 'fomantic-ui-react';

export default () => <Progress percent={50} progress />;
```

## 进度文本居中显示

```jsx
import React from 'react';
import { Progress } from 'fomantic-ui-react';

export default () => <Progress percent={23} progress centered />;
```

<API src="@/progress/Progress.tsx"></API>
