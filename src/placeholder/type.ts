import { CommonProps } from '../common';

export interface PlaceholderProps extends CommonProps {}

export interface PlaceholderLineProps {
  /**
   * 标签名称
   * @default div
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

export interface PlaceholderParagraphProps extends CommonProps {}

export interface PlaceholderImageProps {
  /**
   * 标签名称
   * @default div
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
}

export interface PlaceholderHeaderProps extends CommonProps {
  /**
   * 图片
   */
  image?: boolean;
}
