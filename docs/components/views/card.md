---
order: 1
---

# Card 卡片

```jsx
import React from 'react';
import { Card, Image, Icon } from 'fomantic-ui-react';

export default () => (
  <Card>
    <Image src="/images/avatar/large/kristy.png" ui={false} wrapped />
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
import { Card, Image, Icon, Span } from 'fomantic-ui-react';

export default () => (
  <Card>
    <Card.Content>
      <Card.Meta floated="right" content="14h" />
      <Image avatar src="/images/avatar/large/elliot.jpg" />
      Elliot
    </Card.Content>
    <Image src="/images/image.png" ui={false} wrapped />
    <Card.Content>
      <Span floated="right">
        <Icon name="heart outline" />
        17 likes
      </Span>
      <Icon name="comment" />3 comments
    </Card.Content>
    <Card.Content extra>// TODO 输入框</Card.Content>
  </Card>
);
```

## API

### **Card**<Badge>API</Badge>

<API src="@/card/Card.tsx" hideTitle></API>

### **CardContent**<Badge>API</Badge>

<API src="@/card/CardContent.tsx" hideTitle></API>

### **CardHeader**<Badge>API</Badge>

<API src="@/card/CardHeader.tsx" hideTitle></API>

### **CardMeta**<Badge>API</Badge>

<API src="@/card/CardMeta.tsx" hideTitle></API>

### **CardDescription**<Badge>API</Badge>

<API src="@/card/CardDescription.tsx" hideTitle></API>
