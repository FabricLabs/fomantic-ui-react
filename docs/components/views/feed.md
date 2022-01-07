---
order: 3
---

# Feed 动态

```jsx
import React from 'react';
import { Feed, Icon } from 'fomantic-ui-react';

export default () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src="/images/avatar/small/elliot.jpg" alt="Avatar" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User content="Elliot Fu" /> added you as a friend
          <Feed.Date content="1 Hour Ago" />
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img src="/images/avatar/small/helen.jpg" alt="Avatar" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date content="4 days ago" />
        </Feed.Summary>
        <Feed.Extra className="images">
          <a>
            <img src="/images/image.png" />
          </a>
          <a>
            <img src="/images/image.png" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 1 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img src="/images/avatar/small/jenny.jpg" alt="Avatar" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User content="Jenny Hess" /> added you as a friend
          <Feed.Date content="2 Days Ago" />
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img src="/images/avatar/small/joe.jpg" alt="Avatar" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date content="3 days ago" />
        </Feed.Summary>
        <Feed.Extra className="text">
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over
          again. Even if we don't run extra laps that day, we surely will come back for more of the same another day
          soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    <Feed.Event>
      <Feed.Label>
        <img src="/images/avatar/small/justen.jpg" alt="Avatar" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date content="4 days ago" />
        </Feed.Summary>
        <Feed.Extra className="images">
          <a>
            <img src="/images/image.png" />
          </a>
          <a>
            <img src="/images/image.png" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" /> 41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);
```

## API

### **Feed**<Badge>API</Badge>

<API src="@/feed/Feed.tsx" hideTitle></API>

### **FeedEvent**<Badge>API</Badge>

<API src="@/feed/FeedEvent.tsx" hideTitle></API>

### **FeedLabel**<Badge>API</Badge>

<API src="@/feed/FeedLabel.tsx" hideTitle></API>

### **FeedContent**<Badge>API</Badge>

<API src="@/feed/FeedContent.tsx" hideTitle></API>

### **FeedSummary**<Badge>API</Badge>

<API src="@/feed/FeedSummary.tsx" hideTitle></API>

### **FeedUser**<Badge>API</Badge>

<API src="@/feed/FeedUser.tsx" hideTitle></API>

### **FeedDate**<Badge>API</Badge>

<API src="@/feed/FeedDate.tsx" hideTitle></API>

### **FeedExtra**<Badge>API</Badge>

<API src="@/feed/FeedExtra.tsx" hideTitle></API>

### **FeedMeta**<Badge>API</Badge>

<API src="@/feed/FeedMeta.tsx" hideTitle></API>

### **FeedLike**<Badge>API</Badge>

<API src="@/feed/FeedLike.tsx" hideTitle></API>
