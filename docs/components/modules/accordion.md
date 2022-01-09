---
group:
  path: /components/modules
  title: 模块
order: 0
---

# Accordion 折叠

```jsx
import React, { useState } from 'react';
import { Accordion, Icon } from 'fomantic-ui-react';

export default () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleClick = (e, i) => {
    const newKey = activeKey === i ? -1 : i;
    setActiveKey(newKey);
  };

  return (
    <>
      <Accordion>
        <Accordion.Title active={activeKey === 0} index={0} onClick={handleClick}>
          <Icon name="dropdown" />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeKey === 0}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
            guest in many households across the world.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeKey === 1} index={1} onClick={handleClick}>
          <Icon name="dropdown" />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeKey === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog
            that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeKey === 2} index={2} onClick={handleClick}>
          <Icon name="dropdown" />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeKey === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
            assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
            from a shelter, helps give a good home to a dog who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    </>
  );
};
```

## API

### **Accordion**<Badge>API</Badge>

<API src="@/accordion/Accordion.tsx" hideTitle></API>

### **AccordionTitle**<Badge>API</Badge>

<API src="@/accordion/AccordionTitle.tsx" hideTitle></API>

### **AccordionContent**<Badge>API</Badge>

<API src="@/accordion/AccordionContent.tsx" hideTitle></API>
