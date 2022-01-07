export interface FInputProps {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * 聚焦
   */
  focus?: boolean;
  /**
   * 图标名称
   */
  icon?: string;
  /**
   * 图标位置
   */
  iconPosition?: 'left' | 'right' | 'left corner' | 'right corner';
  /**
   * 加载
   */
  loading?: boolean;
  /**
   * 加载双倍
   */
  loadingDouble?: boolean;
  /**
   * 加载图标颜色
   */
  loadingColor?: 'red' | 'blue' | 'purple';
  /**
   * 快速
   */
  loadingFast?: boolean;
  /**
   * 伸缩
   */
  loadingElastic?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 错误
   */
  error?: boolean;
}
