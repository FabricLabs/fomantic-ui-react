import { ChangeEvent, HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, MouseEvent } from 'react';
import { animation } from '../transition/type';
import { CommonProps, FNode, ModuleProps, StyledProps } from '../common';

export interface DropdownProps extends ModuleProps {
  /**
   * 要显示的文本
   */
  text?: string;
  /**
   * 触发方式
   */
  on?: 'hover' | 'click' | 'focus';
  /**
   * 选择模式
   */
  selection?: boolean;
  /**
   * 清除选择
   */
  clearable?: boolean;
  /**
   * 选择模式下，字段名
   */
  name?: string;
  /**
   * 选择模式下的值
   */
  value?: boolean | string | number | Array<any> | { [key: string]: any };
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * fluid
   */
  fluid?: boolean;
  /**
   * 搜索
   */
  search?: boolean;
  /**
   * 当搜索没有结果时显示的信息
   */
  noResultsMessage?: FNode;
  /**
   * 数据化配置选项内容
   */
  options?: Array<DropdownItemProps>;
  /**
   * 点击时触发
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export interface DropdownMenuProps extends ModuleProps {
  /**
   * 是否显示下拉列表
   */
  open?: boolean;
  /**
   * 下拉列表可以滚动
   */
  scrolling?: boolean;
  /**
   * 滚动提示
   */
  scrollhint?: boolean;
  /**
   * 动画类型
   */
  animation?: animation;
  /**
   * 动画持续时间；ms
   */
  duration?: number;
  /**
   * 动画开始时触发
   */
  onStart?: Function;
  /**
   * 显示动画结束时触发
   */
  onShow?: Function;
  /**
   * 隐藏动画结束时触发
   */
  onHide?: Function;
  /**
   * 动画结束时触发
   */
  onComplete?: Function;
}

export interface DropdownItemProps extends ModuleProps {
  /**
   * 显示文本
   */
  text?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 将样式设置为当前选定的项目
   */
  active?: boolean;
  /**
   * 已选择项
   */
  selected?: boolean;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 不可过滤
   */
  unfilterable?: boolean;
  /**
   * 存储值
   */
  value?: string | boolean | number | Array<any> | { [key: string]: any };
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * 点击时触发
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export interface DropdownDividerProps extends CommonProps {}

export interface DropdownSearchInputProps extends StyledProps {
  /**
   * 自动完成
   */
  autoComplete?: string;
  /**
   * 输入类型
   */
  type?: HTMLInputTypeAttribute;
  /**
   * 存储值
   */
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  /**
   * 输入可以接收焦点
   */
  tabIndex?: HTMLAttributes<HTMLInputElement>['tabIndex'];
  /**
   * 选中值变化时触发
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
