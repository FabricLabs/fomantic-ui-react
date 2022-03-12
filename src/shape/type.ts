import { ModuleProps } from '../common';

export interface ShapeProps extends ModuleProps {
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
}

export interface ShapeSidesProps extends ModuleProps {}

export interface ShapeSideProps extends ModuleProps {}
