import { animation, animationShape } from '../transition/type';
import { ElementProps, FNode, timeShape } from '../common';

export interface PopupProps extends ElementProps {
  /**
   * 触发节点
   */
  trigger?: FNode;
  /**
   * 触发方式
   */
  on?: 'hover' | 'click' | 'focus';
  /**
   * 过渡持续时间 (ms)
   */
  duration?: number | timeShape;
  /**
   * 动画样式
   */
  animation?: animation | animationShape;
  /**
   * 延迟执行
   */
  delay?: number | timeShape;
  /**
   * 位置
   */
  position?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end';
}
