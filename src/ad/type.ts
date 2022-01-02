import { FNode, ViewProps } from '../common';

export interface AdProps extends ViewProps {
  /**
   * 单元
   */
  unit:
    | 'medium rectangle'
    | 'large rectangle'
    | 'vertical rectangle'
    | 'small rectangle'
    | 'mobile banner'
    | 'banner'
    | 'vertical banner'
    | 'top banner'
    | 'half banner'
    | 'button'
    | 'square button'
    | 'small button'
    | 'skyscraper'
    | 'wide skyscraper'
    | 'leaderboard'
    | 'large leaderboard'
    | 'mobile leaderboard'
    | 'billboard'
    | 'panorama'
    | 'netboard'
    | 'half page'
    | 'square'
    | 'small square';
  /**
   * 要在广告上显示的文本
   */
  test?: string | boolean | number;
  /**
   * 居中
   */
  centered?: boolean;
  /**
   * 内容
   */
  content?: FNode;
}
