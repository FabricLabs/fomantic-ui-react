import { ElementProps } from '../common';

export interface StepProps extends ElementProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 完成
   */
  completed?: boolean;
  /**
   * 链接
   */
  link?: boolean;
}

export interface StepGroupProps extends ElementProps {
  /**
   * 序号
   */
  ordered?: boolean;
  /**
   * 垂直样式
   */
  vertical?: boolean | 'right';
}

export interface StepContentProps extends ElementProps {}

export interface StepTitleProps extends ElementProps {}

export interface StepDescriptionProps extends ElementProps {}
