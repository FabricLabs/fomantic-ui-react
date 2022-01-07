---
order: 2
---

# Comment 评论

```jsx
import React from 'react';
import { Comment, Header } from 'fomantic-ui-react';

export default () => (
  <Comment.Group>
    <Header as="h3" dividing content="Comments" />
    <Comment>
      <Comment.Avatar src="/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a" content="Matt" />
        <Comment.Metadata>
          <span class="date">Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action content="Reply" />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar src="/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a" content="Elliot Fu" />
        <Comment.Metadata>
          <span class="date">Yesterday at 12:30AM</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action content="Reply" />
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Comment.Author as="a" content="Jenny Hess" />
            <Comment.Metadata>
              <span class="date">Just now</span>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action content="Reply" />
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>
    <Comment>
      <Comment.Avatar src="/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="a" content="Joe Henderson" />
        <Comment.Metadata>
          <span class="date">5 days ago</span>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action content="Reply" />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);
```

## API

### **Comment**<Badge>API</Badge>

<API src="@/comment/Comment.tsx" hideTitle></API>

### **CommentGroup**<Badge>API</Badge>

<API src="@/comment/CommentGroup.tsx" hideTitle></API>

### **CommentAvatar**<Badge>API</Badge>

<API src="@/comment/CommentAvatar.tsx" hideTitle></API>

### **CommentContent**<Badge>API</Badge>

<API src="@/comment/CommentContent.tsx" hideTitle></API>

### **CommentAuthor**<Badge>API</Badge>

<API src="@/comment/CommentAuthor.tsx" hideTitle></API>

### **CommentMetadata**<Badge>API</Badge>

<API src="@/comment/CommentMetadata.tsx" hideTitle></API>

### **CommentText**<Badge>API</Badge>

<API src="@/comment/CommentText.tsx" hideTitle></API>

### **CommentActions**<Badge>API</Badge>

<API src="@/comment/CommentActions.tsx" hideTitle></API>

### **CommentAction**<Badge>API</Badge>

<API src="@/comment/CommentAction.tsx" hideTitle></API>
