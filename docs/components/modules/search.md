---
order: 11
---

# Search 搜索

```jsx
import React from 'react';
import { Search } from 'fomantic-ui-react';

export default () => <Search placeholder="Common passwords..." showNoResults={false} />;
```

## 图标

```jsx
import React from 'react';
import { Search } from 'fomantic-ui-react';

export default () => <Search placeholder="Common passwords..." icon showNoResults={false} />;
```

```jsx
import React from 'react';
import { Search } from 'fomantic-ui-react';

export default () => <Search placeholder="Common passwords..." icon="left" showNoResults={false} />;
```

## 分类

```jsx
import React, { useReducer, useRef, useCallback } from 'react';
import _ from 'lodash';
import { faker } from '@faker-js/faker';
import { Search, Button } from 'fomantic-ui-react';

const source = _.times(20, () => ({
  // title: faker.address.country(),
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

const initialState = {
  loading: false,
  results: [],
  value: '',
};

const exampleReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection };
    default:
      throw new Error();
  }
};

export default () => {
  const [state, dispatch] = useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = useRef();
  const handleSearchChange = useCallback((e) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: e.target.value });

    timeoutRef.current = setTimeout(() => {
      if (e.target.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(e.target.value), 'i');
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Search
      placeholder="Search..."
      onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.title })}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
      loading={loading}
      icon
    />
  );
};
```

## API

### **Search**<Badge>API</Badge>

<API src="@/search/Search.tsx" hideTitle></API>

### **Search.Results**<Badge>API</Badge>

<API src="@/search/SearchResults.tsx" hideTitle></API>

### **Search.Result**<Badge>API</Badge>

<API src="@/search/SearchResult.tsx" hideTitle></API>

## Props

### **Loading**<Badge>Props</Badge>

<API src="@/search/Loading.tsx" hideTitle></API>
