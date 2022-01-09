import { ElementProps, ModuleProps } from '../common';

export interface AccordionProps extends ModuleProps {}

export interface AccordionTitleProps extends ElementProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 索引
   */
  index?: string | number;
  /**
   * 点击事件
   * @param e hehe
   */
  onClick?: Function;
}

export interface AccordionContentProps extends ElementProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 持续时间
   */
  duration?: number;
}
