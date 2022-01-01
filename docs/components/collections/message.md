# Message 消息

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
  </Message>
);
```

## 消息列表

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message>
    <Message.Header>New Site Features</Message.Header>
    <Message.List>
      <Message.Item>You can now have cover images on blog pages</Message.Item>
      <Message.Item>Drafts will now auto-save while writing</Message.Item>
    </Message.List>
  </Message>
);
```

## 图标

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message icon="inbox">
    <Message.Content>
      <Message.Header>Changes in Service</Message.Header>
      <p>
        We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.
      </p>
    </Message.Content>
  </Message>
);
```

```jsx
import React from 'react';
import { Message, Icon } from 'fomantic-ui-react';

export default () => (
  <Message icon>
    <Icon name="notched circle" loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      <p>We're fetching that content for you.</p>
    </Message.Content>
  </Message>
);
```

```jsx
import React from 'react';
import { Message, Icon } from 'fomantic-ui-react';

export default () => (
  <Message
    icon={<Icon name="notched circle" loading />}
    header="Just one second"
    content="We're fetching that content for you."
  />
);
```

## 关闭

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message
    closable
    header="Welcome back!"
    content="This is a special notification which you can dismiss if you're bored with it."
  />
);
```

## 隐藏

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => <Message hidden content="You can't see me" />;
```

## 显示

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => <Message visible content="You can always see me" />;
```

## 文本对齐

居中对齐：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message header="New Version is available!" content="When are you going to update?" textAligned="center" />
);
```

居右对齐：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message header="New Version is available!" content="When are you going to update?" textAligned="right" />
);
```

## 紧凑

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => <Message compact content="Get all the best inventions in your e-mail every day. Sign up now!" />;
```

## 浮动

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => <Message floating content="Way to go!" />;
```

## 类型

警告：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message
    type="warning"
    closable
    header="You must register before you can do that!"
    content="Visit our registration page, then try again"
  />
);
```

信息：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message type="info" closable header="Was this what you wanted?">
    <Message.List>
      <Message.Item>It's good to see you again.</Message.Item>
      <Message.Item>Did you know it's been a while?</Message.Item>
    </Message.List>
  </Message>
);
```

积极/成功：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message type="positive">
    <Message.Header>You are eligible for a reward</Message.Header>
    <p>
      Go to your <b>special offers</b> page to see now.
    </p>
  </Message>
);
```

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message type="success">
    <Message.Header>Your user registration was successful.</Message.Header>
    <p>You may now log-in with the username you have chosen</p>
  </Message>
);
```

消极/错误：

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message type="negative">
    <Message.Header>We're sorry we can't apply that discount</Message.Header>
    <p>That offer has expired</p>
  </Message>
);
```

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <Message type="error">
    <Message.Header>There were some errors with your submission</Message.Header>
    <Message.List>
      <Message.Item>You must include both a upper and lower case letters in your password.</Message.Item>
      <Message.Item>You need to select your home country.</Message.Item>
    </Message.List>
  </Message>
);
```

## 颜色

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <>
    <Message color="red" content="Red" />
    <Message color="orange" content="Orange" />
    <Message color="yellow" content="Yellow" />
    <Message color="olive" content="Olive" />
    <Message color="green" content="Green" />
    <Message color="teal" content="Teal" />
    <Message color="blue" content="Blue" />
    <Message color="violet" content="Violet" />
    <Message color="purple" content="Purple" />
    <Message color="pink" content="Pink" />
    <Message color="brown" content="Brown" />
    <Message color="black" content="Black" />
  </>
);
```

## 尺寸

```jsx
import React from 'react';
import { Message } from 'fomantic-ui-react';

export default () => (
  <>
    <Message size="mini" content="This is a mini message." />
    <Message size="tiny" content="This is a tiny message." />
    <Message size="small" content="This is a small message." />
    <Message content="This is default" />
    <Message size="large" content="This is large" />
    <Message size="big" content="This is big" />
    <Message size="huge" content="This is huge" />
    <Message size="massive" content="This is massive" />
  </>
);
```

## API

### **Message**<Badge>API</Badge>

<API src="@/message/Message.tsx" hideTitle></API>

### **MessageContent**<Badge>API</Badge>

<API src="@/message/MessageContent.tsx" hideTitle></API>

### **MessageHeader**<Badge>API</Badge>

<API src="@/message/MessageHeader.tsx" hideTitle></API>

### **MessageList**<Badge>API</Badge>

<API src="@/message/MessageList.tsx" hideTitle></API>

### **MessageItem**<Badge>API</Badge>

<API src="@/message/MessageItem.tsx" hideTitle></API>
