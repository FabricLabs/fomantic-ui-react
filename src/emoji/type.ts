export interface EmojiProps {
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
}
