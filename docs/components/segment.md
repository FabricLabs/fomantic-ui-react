## Segment 片段

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => <Segment>Pellentesque habitant morbi tristique senectus.</Segment>;
```

## 占位符

```jsx
import React from 'react';
import { Segment, Header, Button, Icon } from 'fomantic-ui-react';

export default () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="pdf file outline" />
      No documents are listed for this customer.
    </Header>
    <Button color="primary">Add Document</Button>
  </Segment>
);
```

若要在占位符中使用内联块内容，请将内容包装为内联块：

```jsx
import React from 'react';
import { Segment, Header, Button, Icon } from 'fomantic-ui-react';

export default () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="search" />
      We don't have any documents matching your query.
    </Header>
    <Segment.Inline>
      <Button color="primary">Clear Query</Button>
      <Button>Add Document</Button>
    </Segment.Inline>
  </Segment>
);
```

## 凸显

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>;
```

## 堆叠式

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => <Segment stacked>Pellentesque habitant morbi tristique senectus.</Segment>;
```

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => <Segment stacked="tall">Pellentesque habitant morbi tristique senectus.</Segment>;
```

## 堆叠

```jsx
/**
 * iframe: true
 */
import React from 'react';
import { Segment, Header } from 'fomantic-ui-react';

export default () => (
  <div style={{ padding: '2rem' }}>
    <Segment piled>
      <Header as="h4">A header</Header>
      <p>
        Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
        detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
        choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
      </p>
      <p>
        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis
        sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
        phaedrum, vim vivendum maiestatis in.
      </p>
      <p>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum
        aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
        everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
      </p>
    </Segment>
  </div>
);
```

## 组合

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => (
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
);
```

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => (
  <Segment.Group basic>
    <Segment>Top</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
);
```

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => (
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment color="red">Middle</Segment>
    <Segment color="blue">Middle</Segment>
    <Segment color="green">Middle</Segment>
    <Segment color="yellow">Bottom</Segment>
  </Segment.Group>
);
```

```jsx
import React from 'react';
import { Segment } from 'fomantic-ui-react';

export default () => (
  <Segment.Group>
    <Segment>Top</Segment>
    <Segment secondary>Secondary Content</Segment>
  </Segment.Group>
);
```

<API src="../../src/segment/Segment.tsx"></API>
