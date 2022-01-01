# Table 表格

```jsx
import React from 'react';
import { Table } from 'fomantic-ui-react';

export default () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Job</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>James</Table.Cell>
        <Table.Cell>24</Table.Cell>
        <Table.Cell>Engineer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>26</Table.Cell>
        <Table.Cell>Engineer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elyse</Table.Cell>
        <Table.Cell>24</Table.Cell>
        <Table.Cell>Designer</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
```

```jsx
import React from 'react';
import { Table, Header } from 'fomantic-ui-react';

export default () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
        <Table.HeaderCell>Effect</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>Consensus</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center" content="A" />
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>Rating</Table.Cell>
        <Table.Cell textAlign="right">
          80% <br />
          <a href="#">18 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
          variability in this increase, however, with some nonresponders.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center" content="A" />
        </Table.Cell>
        <Table.Cell>Weight</Table.Cell>
        <Table.Cell>Rating</Table.Cell>
        <Table.Cell textAlign="right">
          100% <br />
          <a href="#">65 studies</a>
        </Table.Cell>
        <Table.Cell>
          Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
          potency
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
```

## API

### **Table**<Badge>API</Badge>

<API src="@/table/Table.tsx" hideTitle></API>

### **TableHeader**<Badge>API</Badge>

<API src="@/table/TableHeader.tsx" hideTitle></API>

### **TableHeaderCell**<Badge>API</Badge>

<API src="@/table/TableHeaderCell.tsx" hideTitle></API>

### **TableBody**<Badge>API</Badge>

<API src="@/table/TableBody.tsx" hideTitle></API>

### **TableRow**<Badge>API</Badge>

<API src="@/table/TableRow.tsx" hideTitle></API>

### **TableCell**<Badge>API</Badge>

<API src="@/table/TableCell.tsx" hideTitle></API>

### **TableFooter**<Badge>API</Badge>

<API src="@/table/TableFooter.tsx" hideTitle></API>
