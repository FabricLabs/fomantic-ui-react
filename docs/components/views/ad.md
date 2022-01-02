---
group:
  path: /components/views
  title: 视图
---

# Ad 广告

```jsx
import React from 'react';
import { Ad } from 'fomantic-ui-react';

export default () => (
  <>
    <Ad unit="medium rectangle" test="medium rectangle" />
    <Ad unit="large rectangle" test="large rectangle" />
    <Ad unit="vertical rectangle" test="vertical rectangle" />
    <Ad unit="small rectangle" test="small rectangle" />
    <Ad unit="mobile banner" test="mobile banner" />
    <Ad unit="banner" test="banner" />
    <Ad unit="vertical banner" test="vertical banner" />
    <Ad unit="top banner" test="top banner" />
    <Ad unit="half banner" test="half banner" />
    <Ad unit="button" test="button" />
    <Ad unit="square button" test="square button" />
    <Ad unit="small button" test="small button" />
    <Ad unit="skyscraper" test="skyscraper" />
    <Ad unit="wide skyscraper" test="wide skyscraper" />
    <Ad unit="leaderboard" test="leaderboard" />
    <Ad unit="large leaderboard" test="large leaderboard" />
    <Ad unit="mobile leaderboard" test="mobile leaderboard" />
    <Ad unit="billboard" test="billboard" />
    <Ad unit="panorama" test="panorama" />
    <Ad unit="netboard" test="netboard" />
    <Ad unit="half page" test="half page" />
    <Ad unit="small square" test="small square" />
  </>
);
```

## 居中

```jsx
import React from 'react';
import { Ad } from 'fomantic-ui-react';

export default () => <Ad unit="banner" test="Ad" centered />;
```

<API src="@/ad/Ad.tsx"></API>
