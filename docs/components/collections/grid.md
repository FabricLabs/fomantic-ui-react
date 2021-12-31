# Grid 网格

```jsx
import React from 'react';
import { Grid } from 'fomantic-ui-react';

const style = {
  backgroundColor: '#563d7c1a',
  boxShadow: '0px 0px 0px 1px rgb(86 61 124 / 20%) inset',
  width: '100%',
  height: '3rem',
};

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <div style={style}></div>
  </Grid.Column>
));

export default () => <Grid style={{ backgroundColor: '#F0F0F0' }}>{columns}</Grid>;
```

## 分割线

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 垂直分割线

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 单元格

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column wide={13}>
        <Image src="/images/centered-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column wide={10}>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid celled="internally">
    <Grid.Row>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column wide={10}>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column wide={10}>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column wide={3}>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 行

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 列

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid>
    <Grid.Column wide={8}>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column wide={8}>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column wide={8}>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column wide={8}>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
  </Grid>
);
```

## 浮动

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid>
    <Grid.Column wide={5} floated="left">
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column wide={5} floated="right">
      <Image src="/images/paragraph.png" />
    </Grid.Column>
  </Grid>
);
```

## 列宽

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid>
    <Grid.Column wide={4}>
      <Image src="/images/image.png" />
    </Grid.Column>
    <Grid.Column wide={9}>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column wide={3}>
      <Image src="/images/media-paragraph.png" />
    </Grid.Column>
  </Grid>
);
```

## 列总数

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 等宽

```jsx
import React from 'react';
import { Grid, Segment } from 'fomantic-ui-react';

export default () => (
  <Grid columns="equal">
    <Grid.Column>
      <Segment>1</Segment>
    </Grid.Column>
    <Grid.Column wide={8}>
      <Segment>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
);
```

```jsx
import React from 'react';
import { Grid, Segment } from 'fomantic-ui-react';

export default () => (
  <Grid columns="equal">
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 拉伸

```jsx
import React from 'react';
import { Grid, Segment } from 'fomantic-ui-react';

export default () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

```jsx
import React from 'react';
import { Grid, Segment, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns="equal">
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column wide={6}>
        <Segment>
          <Image src="/images/image.png" />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column wide={6}>
        <Segment>
          <Image src="/images/image.png" />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 填充

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Divider />
    <Grid columns={2} padded>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid>
  </>
);
```

垂直方向：

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Divider />
    <Grid columns={2} padded="vertically">
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid>
  </>
);
```

水平方向：

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Divider />
    <Grid columns={2} padded="horizontally">
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/paragraph.png" />
      </Grid.Column>
    </Grid>
  </>
);
```

## 紧凑

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Divider />
    <Grid columns={2} celled="internally" compact>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);
```

非常紧凑：

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <>
    <Divider />
    <Grid columns={2} celled="internally" compact="very">
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);
```

## 宽松

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns={4} relaxed>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
  </Grid>
);
```

非常宽松：

```jsx
import React from 'react';
import { Grid, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns={4} relaxed="very">
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
    <Grid.Column>
      <Image src="/images/paragraph.png" />
    </Grid.Column>
  </Grid>
);
```

## 颜色

```jsx
import React from 'react';
import { Grid } from 'fomantic-ui-react';

export default () => (
  <Grid columns={5} padded>
    <Grid.Column color="red">Red</Grid.Column>
    <Grid.Column color="orange">Orange</Grid.Column>
    <Grid.Column color="yellow">Yellow</Grid.Column>
    <Grid.Column color="olive">Olive</Grid.Column>
    <Grid.Column color="green">Green</Grid.Column>
    <Grid.Column color="teal">Teal</Grid.Column>
    <Grid.Column color="blue">Blue</Grid.Column>
    <Grid.Column color="violet">Violet</Grid.Column>
    <Grid.Column color="purple">Purple</Grid.Column>
    <Grid.Column color="pink">Pink</Grid.Column>
    <Grid.Column color="brown">Brown</Grid.Column>
    <Grid.Column color="grey">Grey</Grid.Column>
    <Grid.Column color="black">Black</Grid.Column>
  </Grid>
);
```

```jsx
import React from 'react';
import { Grid } from 'fomantic-ui-react';

export default () => (
  <Grid padded>
    <Grid.Row color="red">
      <Grid.Column>Red</Grid.Column>
    </Grid.Row>
    <Grid.Row color="orange">
      <Grid.Column>Orange</Grid.Column>
    </Grid.Row>
    <Grid.Row color="yellow">
      <Grid.Column>Yellow</Grid.Column>
    </Grid.Row>
    <Grid.Row color="olive">
      <Grid.Column>Olive</Grid.Column>
    </Grid.Row>
    <Grid.Row color="green">
      <Grid.Column>Green</Grid.Column>
    </Grid.Row>
    <Grid.Row color="teal">
      <Grid.Column>Teal</Grid.Column>
    </Grid.Row>
    <Grid.Row color="blue">
      <Grid.Column>Blue</Grid.Column>
    </Grid.Row>
    <Grid.Row color="violet">
      <Grid.Column>Violet</Grid.Column>
    </Grid.Row>
    <Grid.Row color="purple">
      <Grid.Column>Purple</Grid.Column>
    </Grid.Row>
    <Grid.Row color="pink">
      <Grid.Column>Pink</Grid.Column>
    </Grid.Row>
    <Grid.Row color="brown">
      <Grid.Column>Brown</Grid.Column>
    </Grid.Row>
    <Grid.Row color="grey">
      <Grid.Column>Grey</Grid.Column>
    </Grid.Row>
    <Grid.Row color="black">
      <Grid.Column>Black</Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## 居中

```jsx
import React from 'react';
import { Grid, Divider, Image } from 'fomantic-ui-react';

export default () => (
  <Grid columns={2} centered>
    <Grid.Column>
      <Image src="/images/image.png" />
    </Grid.Column>
    <Grid.Row columns={4} centered>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4} centered>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/image.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

## API

### **Grid**<Badge>API</Badge>

<API src="@/grid/Grid.tsx" hideTitle></API>

### **GridRow**<Badge>API</Badge>

<API src="@/grid/GridRow.tsx" hideTitle></API>

### **GridColumn**<Badge>API</Badge>

<API src="@/grid/GridColumn.tsx" hideTitle></API>
