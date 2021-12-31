# Form 表单

```jsx
import React from 'react';
import { Form, Button } from 'fomantic-ui-react';

export default () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input type="text" name="first-name" placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input type="text" name="last-name" placeholder="Last Name" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);
```

<API src="@/form/Form.tsx"></API>
