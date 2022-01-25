---
order: 12
---

# Select 选择器

```jsx
import React from 'react';
import { Select } from 'fomantic-ui-react';

const countryOptions = [
  { value: 'af', text: 'Afghanistan' },
  { value: 'ax', text: 'Aland Islands' },
  { value: 'al', text: 'Albania' },
  { value: 'dz', text: 'Algeria' },
  { value: 'as', text: 'American Samoa' },
  { value: 'ad', text: 'Andorra' },
  { value: 'ao', text: 'Angola' },
  { value: 'ai', text: 'Anguilla' },
  { value: 'ag', text: 'Antigua' },
  { value: 'ar', text: 'Argentina' },
  { value: 'am', text: 'Armenia' },
  { value: 'aw', text: 'Aruba' },
  { value: 'au', text: 'Australia' },
  { value: 'at', text: 'Austria' },
  { value: 'az', text: 'Azerbaijan' },
  { value: 'bs', text: 'Bahamas' },
  { value: 'bh', text: 'Bahrain' },
  { value: 'bd', text: 'Bangladesh' },
  { value: 'bb', text: 'Barbados' },
  { value: 'by', text: 'Belarus' },
  { value: 'be', text: 'Belgium' },
  { value: 'bz', text: 'Belize' },
  { value: 'bj', text: 'Benin' },
];

export default () => <Select placeholder="Select your country" name="country" value="az" options={countryOptions} />;
```

<API src="@/select/Select.tsx"></API>
