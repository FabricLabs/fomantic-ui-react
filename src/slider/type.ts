import { ModuleProps } from '../common';

export interface SliderProps extends ModuleProps {
  /**
   * 最小值
   */
  min?: number;
  /**
   * 最大值
   */
  max?: number;
  /**
   * 步长, 0 为禁用步长
   */
  step?: number;
  /**
   * 开始值
   */
  start?: number;
  /**
   * 在使用范围滑块的情况下要设置的第二个值
   */
  end?: number;
  /**
   * 范围
   */
  range?: boolean;
  /**
   * 垂直方向
   */
  vertical?: boolean;
  /**
   * 刻度
   */
  labeled?: boolean;
  /**
   * 刻度类型
   */
  labelType?: 'number' | 'letter';
  /**
   * 刻度在下方显示
   */
  labelButtom?: boolean;
  /**
   * 标记线
   */
  ticked?: boolean;
  /**
   * 平滑
   */
  smooth?: boolean;
  /**
   * 刻度之间的距离
   */
  labelDistance?: number;
  /**
   * 刻度是否应在调整窗口大小时自动调整
   */
  autoAdjustLabels?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 反转
   */
  inverted?: boolean;
  /**
   * 自定义刻度显示
   */
  interpretLabel?: (value: number) => string | number;
  /**
   * 滑块值改变时调用
   */
  onChange?: (diff?: number, start?: number, end?: number) => void;
  /**
   * 滑块移动时调用
   */
  onMove?: (diff?: number, start?: number, end?: number) => void;
  /**
   * 滑动开始时调用
   */
  onStart?: () => void;
}
