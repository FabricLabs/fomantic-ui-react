import classNames from 'classnames';
import { createElement } from 'react';
import FeedContent from './FeedContent';
import FeedDate from './FeedDate';
import FeedEvent from './FeedEvent';
import FeedExtra from './FeedExtra';
import FeedLabel from './FeedLabel';
import FeedLike from './FeedLike';
import FeedMeta from './FeedMeta';
import FeedSummary from './FeedSummary';
import FeedUser from './FeedUser';
import { FeedProps } from './type';

const Feed = ({ as = 'div', className, children, ...props }: FeedProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'feed', className), ...props }, children);
};

Feed.displayName = 'Feed';
Feed.Event = FeedEvent;
Feed.Label = FeedLabel;
Feed.Content = FeedContent;
Feed.Summary = FeedSummary;
Feed.User = FeedUser;
Feed.Date = FeedDate;
Feed.Extra = FeedExtra;
Feed.Meta = FeedMeta;
Feed.Like = FeedLike;

export default Feed;
