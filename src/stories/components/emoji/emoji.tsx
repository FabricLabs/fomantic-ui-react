import '../less/definitions/elements/emoji.less';

export type EmojiProps = {
  /**
   * 名称
   */
  name: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 链接
   */
  link?: boolean;
  /**
   * 加载
   */
  loading?: boolean;
  /**
   * 尺寸
   */
  size?: 'small' | 'medium' | 'large' | 'big';
};

export const Emoji = ({
  name,
  className,
  disabled,
  link,
  loading,
  size,
  ...props
}: EmojiProps) => {
  const classNames = [];

  if (size) {
    classNames.push(size);
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (link) {
    classNames.push('link');
  }

  if (loading) {
    classNames.push('loading');
  }

  if (className) {
    classNames.push(className);
  }
  return <em className={classNames.join(' ')} data-emoji={name} {...props} />;
};
