---
order: 15
---

# Sticky 粘性的

```jsx
import React, { useRef } from 'react';
import { Sticky, Rail, Segment, Placeholder, Image } from 'fomantic-ui-react';

export default () => {
  const ref = useRef(null);
  return (
    <>
      <div ref={ref}>
        <Segment style={{ width: '50%', margin: '1rem auto 0' }}>
          <Rail position="left">
            <Segment>Left Rail Content</Segment>
            <Sticky context={ref} topOffset={65} pushing>
              <h3 className="ui header">Stuck Content</h3>
              <Image src="/images/image.png" />
            </Sticky>
          </Rail>
          <Rail position="right">
            <Sticky context={ref} topOffset={65}>
              <h3 className="ui header">Stuck Content</h3>
              <Image src="/images/image.png" />
            </Sticky>
          </Rail>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </Segment>
      </div>
    </>
  );
};
```

<API src="@/sticky/Sticky.tsx"></API>
