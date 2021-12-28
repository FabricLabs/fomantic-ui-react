## List 列表

列表对相关内容进行分组：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List>
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
);
```

也可以用速记来做同样的事情：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => <List items={['Apples', 'Pears', 'Oranges']} />;
```

列表项可以包含图标：

```jsx
import React from 'react';
import { List, Icon } from 'fomantic-ui-react';

export default () => (
  <List>
    <List.Item>
      <Icon name="users" />
      <List.Content>Semantic UI</List.Content>
    </List.Item>
    <List.Item>
      <Icon name="marker" />
      <List.Content>New York, NY</List.Content>
    </List.Item>
    <List.Item>
      <Icon name="mail" />
      <List.Content>
        <a href="mailto:fireloong@foxmail.com">fireloong@foxmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="linkify" />
      <List.Content>
        <a href="http://www.fomantic-ui.com">fomantic-ui.com</a>
      </List.Content>
    </List.Item>
  </List>
);
```

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List relaxed divided>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);
```

```jsx
import React from 'react';
import { List, Icon } from 'fomantic-ui-react';

export default () => (
  <List>
    <List.Item>
      <Icon name="folder" />
      <List.Content>
        <List.Header content="src" />
        <List.Description content="Source files for project" />
        <List>
          <List.Item>
            <Icon name="folder" />
            <List.Content>
              <List.Header content="site" />
              <List.Description content="Your site's theme" />
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="folder" />
            <List.Content>
              <List.Header content="themes" />
              <List.Description content="Packaged theme files" />
              <List>
                <List.Item>
                  <Icon name="folder" />
                  <List.Content>
                    <List.Header content="default" />
                    <List.Description content="Default packaged theme" />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Icon name="folder" />
                  <List.Content>
                    <List.Header content="my_theme" />
                    <List.Description content="Packaged themes are also available in this folder" />
                  </List.Content>
                </List.Item>
              </List>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name="file" />
            <List.Content>
              <List.Header content="theme.config" />
              <List.Description content="Config file for setting packaged themes" />
            </List.Content>
          </List.Item>
        </List>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="folder" />
      <List.Content>
        <List.Header content="dist" />
        <List.Description content="Compiled CSS and JS files" />
        <List>
          <List.Item>
            <Icon name="folder" />
            <List.Content>
              <List.Header content="components" />
              <List.Description content="Individual component CSS and JS" />
            </List.Content>
          </List.Item>
        </List>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="file" />
      <List.Content>
        <List.Header content="semantic.json" />
        <List.Description content="Contains build settings for gulp" />
      </List.Content>
    </List.Item>
  </List>
);
```

## 列表符号

列表可以用项目符号标记项目：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List bulleted>
    <List.Item>Gaining Access</List.Item>
    <List.Item>Inviting Friends</List.Item>
    <List.Item>
      Benefits
      <List>
        <List.Item href="#">Link to somewhere</List.Item>
        <List.Item>Rebates</List.Item>
        <List.Item>Discounts</List.Item>
      </List>
    </List.Item>
    <List.Item>Warranty</List.Item>
  </List>
);
```

为方便起见，简单的项目符号列表也可以使用 `ul` 和 `li` 标签：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List as="ul">
    <List.Item as="li">Gaining Access</List.Item>
    <List.Item as="li">Inviting Friends</List.Item>
    <List.Item as="li">
      Benefits
      <List.List as="ul">
        <List.Item as="li">
          <a href="#">Link to somewhere</a>
        </List.Item>
        <List.Item as="li">Rebates</List.Item>
        <List.Item as="li">Discounts</List.Item>
      </List.List>
    </List.Item>
    <List.Item as="li">Warranty</List.Item>
  </List>
);
```

横向排列：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List bulleted horizontal>
    <List.Item href="#">About Us</List.Item>
    <List.Item href="#">Sitemap</List.Item>
    <List.Item href="#">Contact</List.Item>
  </List>
);
```

## 序号

列表可以按数字顺序排列：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List ordered>
    <List.Item href="#">Getting Started</List.Item>
    <List.Item href="#">Introduction</List.Item>
    <List.Item>
      <a>Languages</a>
      <List.List>
        <List.Item href="#">HTML</List.Item>
        <List.Item href="#">Javascript</List.Item>
        <List.Item href="#">CSS</List.Item>
      </List.List>
    </List.Item>
    <List.Item href="#">Review</List.Item>
  </List>
);
```

还可以使用 `ol` 和 `li` 来呈现有序列表：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List as="ol">
    <List.Item as="li">Signing Up</List.Item>
    <List.Item as="li">User Benefits</List.Item>
    <List.Item as="li">
      User Types
      <List.List as="ol">
        <List.Item as="li">Admin</List.Item>
        <List.Item as="li">Power User</List.Item>
        <List.Item as="li">Regular User</List.Item>
      </List.List>
    </List.Item>
    <List.Item as="li">Deleting Your Account</List.Item>
  </List>
);
```

有序列表有一个后缀 `.`：

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List as="ol" suffixed>
    <List.Item as="li">Signing Up</List.Item>
    <List.Item as="li">User Benefits</List.Item>
    <List.Item as="li">
      User Types
      <List.List as="ol">
        <List.Item as="li">Admin</List.Item>
        <List.Item as="li">Power User</List.Item>
        <List.Item as="li">Regular User</List.Item>
      </List.List>
    </List.Item>
    <List.Item as="li">Deleting Your Account</List.Item>
  </List>
);
```

## 链接

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List link>
    <List.Item active>Home</List.Item>
    <List.Item as="a">About</List.Item>
    <List.Item as="a">Jobs</List.Item>
    <List.Item as="a">Team</List.Item>
  </List>
);
```

## 列表项

```jsx
import React from 'react';
import { List } from 'fomantic-ui-react';

export default () => (
  <List>
    <List.Item>1</List.Item>
    <List.Item>2</List.Item>
    <List.Item>3</List.Item>
  </List>
);
```

## API

### List

<API src="../../src/list/List.tsx" hideTitle></API>

### List.Item

<API src="../../src/list/ListItem.tsx" hideTitle></API>

### List.Content

<API src="../../src/list/ListContent.tsx" hideTitle></API>

### List.Headert

<API src="../../src/list/ListHeader.tsx" hideTitle></API>

### List.Description

<API src="../../src/list/ListDescription.tsx" hideTitle></API>

### List.Icon

<API src="../../src/list/ListIcon.tsx" hideTitle></API>

### List.List

<API src="../../src/list/ListList.tsx" hideTitle></API>
