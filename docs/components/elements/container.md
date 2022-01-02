---
order: 1
---

# Container 容器

### 容器尺寸

|            | 移动                                       | 平板                                    | 小型显示器                                    | 大型显示器                                    |
| ---------- | ------------------------------------------ | --------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| 宽度       | 100%                                       | 723px                                   | 933px                                         | 1127px                                        |
| 栅格间间隔 | 1em                                        | Fluid                                   | Fluid                                         | Fluid                                         |
| 变量       | <font size=1>`$largestMobileScreen`</font> | <font size=1>`$mobileBreakpoint`</font> | <font size=1>`$smallMonitorBreakpoint`</font> | <font size=1>`$largeMonitorBreakpoint`</font> |
| 设备宽度   | 小于 768px                                 | 768px - 991px                           | 992px - 1200px                                | 大于 1200px                                   |

## 基本使用

```jsx
import React from 'react';
import { Container } from 'fomantic-ui-react';

export default () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
      nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
      pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
      in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
);
```

## 文本容器

```jsx
import React from 'react';
import { Container, Header } from 'fomantic-ui-react';

export default () => (
  <Container text>
    <Header as="h2">Header</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
      nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
      pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
      in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
      nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
      pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
      in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
);
```

## 文本对齐

```jsx
import React from 'react';
import { Container } from 'fomantic-ui-react';

export default () => (
  <>
    <Container textAlign="left">Left Aligned</Container>
    <Container textAlign="center">Center Aligned</Container>
    <Container textAlign="right">Right Aligned</Container>
  </>
);
```

<API src="@/container/Container.tsx"></API>
