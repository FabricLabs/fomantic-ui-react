---
order: 17
---

# Toast 事件通知

```jsx
import React from 'react';
import { toast, Button } from 'fomantic-ui-react';

export default () => {
  return <Button onClick={() => toast.open({ message: `You're using the good framework !` })}>信息通知</Button>;
};
```

## 位置

```jsx
import React from 'react';
import { toast, Button } from 'fomantic-ui-react';

export default () => {
  const handleTopLeftClick = () => {
    toast.open({
      position: 'top left',
      newestOnTop: true,
      message: `It's pretty cold down there...`,
    });
  };

  const handleTopCenterClick = () => {
    toast.open({
      position: 'top center',
      message: `It's pretty cold down there...`,
    });
  };

  const handleTopRightClick = () => {
    toast.open({
      position: 'top right',
      message: `It's pretty cold down there...`,
    });
  };

  const handleBottomLeftClick = () => {
    toast.open({
      position: 'bottom left',
      message: `It's pretty cold down there...`,
    });
  };

  const handleBottomCenterClick = () => {
    toast.open({
      position: 'bottom center',
      message: `It's pretty cold down there...`,
    });
  };

  const handleBottomRightClick = () => {
    toast.open({
      position: 'bottom right',
      message: `It's pretty cold down there...`,
    });
  };

  const handleTopAttachedClick = () => {
    toast.open({
      position: 'top attached',
      message: 'I am a top attached toast',
    });
  };

  const handleBottomAttachedClick = () => {
    toast.open({
      position: 'bottom attached',
      newestOnTop: true,
      message: 'I am a bottom attached toast',
    });
  };

  return (
    <>
      <Button onClick={handleTopLeftClick}>上左</Button>
      <Button onClick={handleTopCenterClick}>上中</Button>
      <Button onClick={handleTopRightClick}>上右</Button>
      <br />
      <br />
      <Button onClick={handleBottomLeftClick}>下左</Button>
      <Button onClick={handleBottomCenterClick}>下中</Button>
      <Button onClick={handleBottomRightClick}>下右</Button>
      <br />
      <br />
      <Button onClick={handleTopAttachedClick}>上</Button>
      <Button onClick={handleBottomAttachedClick}>下</Button>
    </>
  );
};
```

## 类型

```jsx
import React from 'react';
import { toast, Button } from 'fomantic-ui-react';

export default () => {
  const successClick = () => toast.open({ message: `You're using the good framework !`, theme: 'success' });
  const infoClick = () => toast.open({ message: `You're using the good framework !`, theme: 'info' });
  const warningClick = () => toast.open({ message: `You're using the good framework !`, theme: 'warning' });
  const errorClick = () => toast.open({ message: `You're using the good framework !`, theme: 'error' });

  return (
    <>
      <Button onClick={successClick}>Success</Button>
      <Button onClick={infoClick}>Info</Button>
      <Button onClick={warningClick}>Warning</Button>
      <Button onClick={errorClick}>Error</Button>
    </>
  );
};
```

## API

### **Toast**<Badge>API</Badge>

<API src="@/toast/Toast.tsx" hideTitle></API>

### **ToastContainer**<Badge>API</Badge>

<API src="@/toast/ToastContainer.tsx" hideTitle></API>
