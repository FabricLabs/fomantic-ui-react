---
order: 3
---

# Item 列表项

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Image src="/images/image.png" ui={false} alt="item" wrapped />
      <Item.Content>
        <Item.Header as="a" content="Header" />
        <Item.Meta>
          <span>Description</span>
        </Item.Meta>
        <Item.Description>
          <p>
            Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading,
            running, and writing.
          </p>
          <p>She likes to spend her time reading, running, and writing.</p>
        </Item.Description>
        <Item.Extra content="Additional Details" />
      </Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" ui={false} alt="item" wrapped />
      <Item.Content>
        <Item.Header as="a" content="Header" />
        <Item.Meta>
          <span>Description</span>
        </Item.Meta>
        <Item.Description>
          <p>
            Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading,
            running, and writing.
          </p>
          <p>She likes to spend her time reading, running, and writing.</p>
        </Item.Description>
        <Item.Extra content="Additional Details" />
      </Item.Content>
    </Item>
  </Item.Group>
);
```

## 图片

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group divided>
    <Item>
      <Image src="/images/image.png" ui={false} alt="item" wrapped />
    </Item>
    <Item>
      <Image src="/images/image.png" ui={false} alt="item" wrapped />
    </Item>
    <Item>
      <Image src="/images/image.png" ui={false} alt="item" wrapped />
    </Item>
  </Item.Group>
);
```

## 内容

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group divided>
    <Item>
      <Image src="/images/image.png" size="tiny" alt="item" wrapped />
      <Item.Content verticalAlign="top">Content A</Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="tiny" alt="item" wrapped />
      <Item.Content verticalAlign="middle">Content A</Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="tiny" alt="item" wrapped />
      <Item.Content verticalAlign="bottom">Content A</Item.Content>
    </Item>
  </Item.Group>
);
```

## 标题

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Image src="/images/image.png" size="tiny" wrapped />
      <Item.Content verticalAlign="middle">
        <Item.Header as="a" content="12 Years a Slave" />
      </Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="tiny" wrapped />
      <Item.Content verticalAlign="middle">
        <Item.Header as="a" content="My Neighbor Totoro" />
      </Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="tiny" wrapped />
      <Item.Content verticalAlign="middle">
        <Item.Header as="a" content="Watchmen" />
      </Item.Content>
    </Item>
  </Item.Group>
);
```

## 元数据

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Image src="/images/image.png" size="small" wrapped />
      <Item.Content>
        <Item.Header content="Arrowhead Valley Camp" />
        <Item.Meta>
          <span>$1200</span>
          <span>1 Month</span>
        </Item.Meta>
        <Item.Description>
          <p>
            By the time you read this, I hope you will have some good changes. Right now I’m always complaining of my
            stupid, of not mature and unsocial. But I still had many hopes and dreams about the future, where you’d be,
            what you’d be doing, and with whom you’d be staying.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="small" wrapped />
      <Item.Content>
        <Item.Header content="Buck's Homebrew Stayaway" />
        <Item.Meta>
          <span>$1000</span>
          <span>2 Weeks</span>
        </Item.Meta>
        <Item.Description>
          <p>
            By the time you read this, I hope you will have some good changes. Right now I’m always complaining of my
            stupid, of not mature and unsocial. But I still had many hopes and dreams about the future, where you’d be,
            what you’d be doing, and with whom you’d be staying.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Image src="/images/image.png" size="small" wrapped />
      <Item.Content>
        <Item.Header content="Astrology Camp" />
        <Item.Meta>
          <span>$1600</span>
          <span>6 Weeks</span>
        </Item.Meta>
        <Item.Description>
          <p>
            By the time you read this, I hope you will have some good changes. Right now I’m always complaining of my
            stupid, of not mature and unsocial. But I still had many hopes and dreams about the future, where you’d be,
            what you’d be doing, and with whom you’d be staying.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);
```

## 链接

```jsx
import React from 'react';
import { Item, Image, Message, Icon } from 'fomantic-ui-react';

export default () => (
  <>
    <Message color="yellow">
      <Icon name="star" />
      To make the entire content of an item link, check out the link variation below
    </Message>
    <Item.Group>
      <Item>
        <Image as="a" src="/images/avatar/large/stevie.jpg" size="tiny" />
        <Item.Content>
          <Item.Header as="a" content="Stevie Feliciano" />
          <Item.Description>
            <p>
              Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time
              reading, running, and writing.
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Image as="a" src="/images/avatar/large/veronika.jpg" size="tiny" />
        <Item.Content>
          <Item.Header as="a" content="Veronika Ossi" />
          <Item.Description>
            <p>
              Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Image as="a" src="/images/avatar/large/jenny.jpg" size="tiny" />
        <Item.Content>
          <Item.Header as="a" content="Jenny Hess" />
          <Item.Description>
            <p>
              Jenny is a student studying Media Management at <a>the New School</a>.
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </>
);
```

## 描述

```jsx
import React from 'react';
import { Item, Image } from 'fomantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Image as="a" src="/images/image.png" size="small" />
      <Item.Content>
        <Item.Header as="a" content="Cute Dog" />
        <Item.Description>
          <p>
            Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others
            for their tiny stature, and even others for their massive size.
          </p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);
```

## 附加内容

```jsx
import React from 'react';
import { Item, Image, Icon } from 'fomantic-ui-react';

export default () => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header as="a" content="Cute Dog" />
        <Item.Description>
          <p>
            Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others
            for their tiny stature, and even others for their massive size.
          </p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </Item.Description>
        <Item.Extra>
          <Icon name="check" color="green" />
          121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);
```

## API

### **Item**<Badge>API</Badge>

<API src="@/item/Item.tsx" hideTitle></API>

### **ItemGroup**<Badge>API</Badge>

<API src="@/item/ItemGroup.tsx" hideTitle></API>

### **ItemContent**<Badge>API</Badge>

<API src="@/item/ItemContent.tsx" hideTitle></API>

### **ItemHeader**<Badge>API</Badge>

<API src="@/item/ItemHeader.tsx" hideTitle></API>

### **ItemMeta**<Badge>API</Badge>

<API src="@/item/ItemMeta.tsx" hideTitle></API>

### **ItemDescription**<Badge>API</Badge>

<API src="@/item/ItemDescription.tsx" hideTitle></API>

### **ItemExtra**<Badge>API</Badge>

<API src="@/item/ItemExtra.tsx" hideTitle></API>
