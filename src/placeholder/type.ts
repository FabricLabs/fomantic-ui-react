import { ElementProps } from '../common';

export interface PlaceholderProps extends ElementProps {}

export interface PlaceholderLineProps {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 长度
   */
  length?: 'full' | 'very long' | 'long' | 'medium' | 'short' | 'very short';
}

export interface PlaceholderParagraphProps extends ElementProps {}

export interface PlaceholderImageProps {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
}

export interface PlaceholderHeaderProps extends ElementProps {
  /**
   * 图片
   */
  image?: boolean;
}
