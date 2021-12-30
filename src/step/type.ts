import { CommonProps } from '../common';

export interface StepProps extends CommonProps {
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

export interface StepGroupProps extends CommonProps {
  /**
   * 序号
   */
  ordered?: boolean;
  /**
   * 垂直样式
   */
  vertical?: boolean | 'right';
}

export interface StepContentProps extends CommonProps {}

export interface StepTitleProps extends CommonProps {}

export interface StepDescriptionProps extends CommonProps {}
