import { ModuleProps } from '../common';

export interface EmbedProps extends ModuleProps {
  /**
   * 视频 ID
   */
  id?: string;
  /**
   * 源地址
   */
  source?: 'youku' | 'youtube' | 'vimeo';
  /**
   * 占位图
   */
  placeholder?: string;
  /**
   * 纵横比
   */
  aspectRatio?: '4:3' | '16:9' | '21:9';
  /**
   * 指定用于嵌入的 URL
   */
  url?: string;
  /**
   * 激活
   */
  active?: boolean;
}
