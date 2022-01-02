# Card 卡片

```jsx
import React from 'react';
import { Card, Image, Icon } from 'fomantic-ui-react';

export default () => (
  <Card>
    <Image src="/images/kristy.png" ui={false} wrapped />
    <Card.Content>
      <Card.Header>Kristy</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2013</span>
      </Card.Meta>
      <Card.Description>Kristy is an art director living in New York.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);
```

```jsx
import React from 'react';
import { Card, Image, Icon } from 'fomantic-ui-react';

export default () => (
  <Card>
    <Card.Content>
      <Card.Meta floated="right" content="14h" />
      <Image avatar src="/images/elliot.jpg" />
      Elliot
    </Card.Content>
    <Image src="/images/image.png" ui={false} wrapped />
  </Card>
);
```

## API

### **Card**<Badge>API</Badge>

<API src="@/card/Card.tsx" hideTitle></API>

### **CardContent**<Badge>API</Badge>

<API src="@/card/CardContent.tsx" hideTitle></API>
