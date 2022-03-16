import { ModuleProps } from '../common';

export interface ShapeProps extends ModuleProps {
  /**
   * 行为
   */
  behavior?: 'flip up' | 'flip down' | 'flip left' | 'flip right' | 'flip over' | 'flip back';
  /**
   * 类型
   */
  type?: 'text' | 'cube';
  /**
   * 动画持续时间
   */
  duration?: number;
  /**
   * 宽度
   */
  width?: string;
  /**
   * 高度
   */
  height?: string;
  /**
   * 变换
   */
  change?: boolean;
  /**
   * 变换开始时触发
   */
  onStart?: Function;
  /**
   * 变换结束时触发
   */
  onComplete?: Function;
}

export interface ShapeSidesProps extends ModuleProps {
  /**
   * 变换
   */
  change?: boolean;
  /**
   * 动画持续时间
   */
  duration?: number;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 高度
   */
  height?: number;
  /**
   * 行为
   */
  behavior?: 'flip up' | 'flip down' | 'flip left' | 'flip right' | 'flip over' | 'flip back';
}

export interface ShapeSideProps extends ModuleProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 隐藏
   */
  hidden?: boolean;
}
