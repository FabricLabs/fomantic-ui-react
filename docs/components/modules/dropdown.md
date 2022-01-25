---
order: 4
---

# Dropdown 下拉列表

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

export default () => (
  <Dropdown text="File">
    <Dropdown.Menu>
      <Dropdown.Item text="New" />
      <Dropdown.Item text="Open..." description="ctrl + o" />
      <Dropdown.Item text="Save as..." description="ctrl + s" />
      <Dropdown.Item text="Rename" description="ctrl + r" />
      <Dropdown.Item text="Make a copy" />
      <Dropdown.Item text="Move to folder" icon="folder" />
      <Dropdown.Item text="Move to trash" icon="trash" description="ctrl + x" />
      <Dropdown.Divider />
      <Dropdown.Item text="Download As..." />
      <Dropdown.Item text="Publish To Web">
        <Dropdown.Menu>
          <Dropdown.Item text="Google Docs" />
          <Dropdown.Item text="Google Drive" />
          <Dropdown.Item text="Dropbox" />
          <Dropdown.Item text="Adobe Creative Cloud" />
          <Dropdown.Item text="Private FTP" />
          <Dropdown.Item text="Another Service..." />
        </Dropdown.Menu>
      </Dropdown.Item>
      <Dropdown.Item text="E-mail Collaborators" />
    </Dropdown.Menu>
  </Dropdown>
);
```

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

const menus = [
  { text: 'New' },
  { text: 'Open...', description: 'ctrl + o' },
  { text: 'Save as...', description: 'ctrl + s' },
  { text: 'Rename', description: 'ctrl + r' },
  { text: 'Make a copy' },
  { text: 'Move to folder', icon: 'folder' },
  { text: 'Move to trash', icon: 'trash', description: 'ctrl + x' },
  { divider: true },
  { text: 'Download As...' },
  { text: 'Publish To Web' },
  { text: 'E-mail Collaborators' },
];

export default () => <Dropdown text="File" options={menus} />;
```

## 选择

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

export default () => (
  <Dropdown selection name="pet" value="7" placeholder="请选择">
    <Dropdown.Menu scrollhint>
      <Dropdown.Item text="Cat" value="0" />
      <Dropdown.Item text="Dog" value="1" />
      <Dropdown.Item text="Bird" value="2" />
      <Dropdown.Item text="Rabbit" value="3" />
      <Dropdown.Item text="Squirrel" value="4" />
      <Dropdown.Item text="Horse" value="5" />
      <Dropdown.Item text="Turtle" value="6" />
      <Dropdown.Item text="Parrot" value="7" />
    </Dropdown.Menu>
  </Dropdown>
);
```

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

export default () => (
  <Dropdown fluid selection name="pet" placeholder="请选择">
    <Dropdown.Menu>
      <Dropdown.Item text="Cat" value="0" />
      <Dropdown.Item text="Dog" value="1" />
      <Dropdown.Item text="Bird" value="2" />
      <Dropdown.Item text="Rabbit" value="3" />
      <Dropdown.Item text="Squirrel" value="4" />
      <Dropdown.Item text="Horse" value="5" />
      <Dropdown.Item text="Turtle" value="6" />
      <Dropdown.Item text="Parrot" value="7" />
    </Dropdown.Menu>
  </Dropdown>
);
```

## 搜索

```jsx
import React from 'react';
import { Dropdown, Flag } from 'fomantic-ui-react';

export default () => (
  <Dropdown fluid selection search name="country" placeholder="Select Country">
    <Dropdown.Menu>
      <Dropdown.Item value="af">
        <Flag name="af" />
        Afghanistan
      </Dropdown.Item>
      <Dropdown.Item value="ax">
        <Flag name="ax" />
        Aland Islands
      </Dropdown.Item>
      <Dropdown.Item value="al">
        <Flag name="al" />
        Albania
      </Dropdown.Item>
      <Dropdown.Item value="dz">
        <Flag name="dz" />
        Algeria
      </Dropdown.Item>
      <Dropdown.Item value="as">
        <Flag name="as" />
        American Samoa
      </Dropdown.Item>
      <Dropdown.Item value="ad">
        <Flag name="ad" />
        Andorra
      </Dropdown.Item>
      <Dropdown.Item value="ao">
        <Flag name="ao" />
        Angola
      </Dropdown.Item>
      <Dropdown.Item value="ai">
        <Flag name="ai" />
        Anguilla
      </Dropdown.Item>
      <Dropdown.Item value="ag">
        <Flag name="ag" />
        Antigua
      </Dropdown.Item>
      <Dropdown.Item value="ar">
        <Flag name="ar" />
        Argentina
      </Dropdown.Item>
      <Dropdown.Item value="am">
        <Flag name="am" />
        Armenia
      </Dropdown.Item>
      <Dropdown.Item value="aw">
        <Flag name="aw" />
        Aruba
      </Dropdown.Item>
      <Dropdown.Item value="au">
        <Flag name="au" />
        Australia
      </Dropdown.Item>
      <Dropdown.Item value="at">
        <Flag name="at" />
        Austria
      </Dropdown.Item>
      <Dropdown.Item value="az">
        <Flag name="az" />
        Azerbaijan
      </Dropdown.Item>
      <Dropdown.Item value="bs">
        <Flag name="bs" />
        Bahamas
      </Dropdown.Item>
      <Dropdown.Item value="bh">
        <Flag name="bh" />
        Bahrain
      </Dropdown.Item>
      <Dropdown.Item value="bd">
        <Flag name="bd" />
        Bangladesh
      </Dropdown.Item>
      <Dropdown.Item value="bb">
        <Flag name="bb" />
        Barbados
      </Dropdown.Item>
      <Dropdown.Item value="by">
        <Flag name="by" />
        Belarus
      </Dropdown.Item>
      <Dropdown.Item value="be">
        <Flag name="be" />
        Belgium
      </Dropdown.Item>
      <Dropdown.Item value="bz">
        <Flag name="bz" />
        Belize
      </Dropdown.Item>
      <Dropdown.Item value="bj">
        <Flag name="bj" />
        Benin
      </Dropdown.Item>
      <Dropdown.Item value="bm">
        <Flag name="bm" />
        Bermuda
      </Dropdown.Item>
      <Dropdown.Item value="bt">
        <Flag name="bt" />
        Bhutan
      </Dropdown.Item>
      <Dropdown.Item value="bo">
        <Flag name="bo" />
        Bolivia
      </Dropdown.Item>
      <Dropdown.Item value="ba">
        <Flag name="ba" />
        Bosnia
      </Dropdown.Item>
      <Dropdown.Item value="bw">
        <Flag name="bw" />
        Botswana
      </Dropdown.Item>
      <Dropdown.Item value="bv">
        <Flag name="bv" />
        Bouvet Island
      </Dropdown.Item>
      <Dropdown.Item value="br">
        <Flag name="br" />
        Brazil
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
```

## 不可过滤

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

export default () => (
  <Dropdown selection search name="states" placeholder="states">
    <Dropdown.Menu>
      <Dropdown.Item unfilterable value="Al">
        Alabama (unfilterable)
      </Dropdown.Item>
      <Dropdown.Item value="Ak">Alaska</Dropdown.Item>
      <Dropdown.Item unfilterable value="Az">
        Arizona (unfilterable)
      </Dropdown.Item>
      <Dropdown.Item unfilterable value="Ar">
        Arkansas (unfilterable)
      </Dropdown.Item>
      <Dropdown.Item value="Ca">California</Dropdown.Item>
      <Dropdown.Item value="Oh">Ohio</Dropdown.Item>
      <Dropdown.Item value="Ok">Oklahoma</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
```

## 清除选项

```jsx
import React from 'react';
import { Dropdown } from 'fomantic-ui-react';

export default () => (
  <Dropdown selection name="language" value="english" placeholder="Select Language" clearable>
    <Dropdown.Menu>
      <Dropdown.Item text="Arabic" value="arabic" />
      <Dropdown.Item text="Chinese" value="chinese" />
      <Dropdown.Item text="Danish" value="danish" />
      <Dropdown.Item text="Dutch" value="dutch" />
      <Dropdown.Item text="English" value="english" />
      <Dropdown.Item text="French" value="french" />
    </Dropdown.Menu>
  </Dropdown>
);
```

## API

### **Dropdown**<Badge>API</Badge>

<API src="@/dropdown/Dropdown.tsx" hideTitle></API>

### **DropdownMenu**<Badge>API</Badge>

<API src="@/dropdown/DropdownMenu.tsx" hideTitle></API>

### **DropdownItem**<Badge>API</Badge>

<API src="@/dropdown/DropdownItem.tsx" hideTitle></API>
