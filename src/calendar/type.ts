import { ElementType } from 'react';
import { FNode, StyledProps } from '../common';
import type { ButtonProps } from '../button';

export interface CalendarProps extends StyledProps {
  /**
   * 标签或组件名称
   */
  as?: ElementType;
  /**
   * 日历展示维度
   */
  mode?: 'month' | 'year';
  /**
   * 用于格式化日期，决定事件参数 formattedFilterDate 的输出值。[详细文档](https://day.js.org/docs/en/display/format)
   */
  format?: string;
  /**
   * 当前高亮日期
   */
  value?: string | Date;
  /**
   * 默认是否显示周末
   */
  isShowWeekendDefault?: boolean;
  /**
   * 第一天从星期几开始，仅在日历展示维度为月份时（mode = month）有效。
   */
  firstDayOfWeek?: number;
  /**
   * 用于自定义日历星期呈现方式。CalendarWeek.day 表示当前是星期几。示例一：['周一', '周二', '周三', '周四', '周五', '星期六', '星期天']。示例二：`({ day }) => '周' + day`
   */
  week?: Array<string> | FNode<CalendarWeek>;
  /**
   * 右上角控制器配置。值为 false 则表示不显示控制器，值为 true 则显示控制器默认配置，值类型为 CalendarController 则显示为自定义控制器配置
   */
  controllerConfig?: boolean | CalendarController;
  /**
   * 月份切换时触发
   */
  onMonthChange?: (options: { month: string; year: string }) => void;
}

export interface RadioGroupProps {}

export interface SelectProps {}

export interface CalendarController {
  /**
   * “今天(本月)”按钮控制器
   */
  current?: { visible?: boolean; currentDayButtonProps?: ButtonProps; currentMonthButtonProps?: ButtonProps };
  /**
   * 是否禁用右上角控制器
   * @default false
   */
  disabled?: boolean;
  /**
   * 日历展示维度控制器
   */
  mode?: { visible?: boolean; radioGroupProps?: RadioGroupProps };
  /**
   * 日历月份控制器
   */
  month?: { visible?: boolean; selectProps?: SelectProps };
  /**
   * 隐藏/显示周末控制器
   */
  weekend?: { visible?: boolean; showWeekendButtonProps?: ButtonProps; hideWeekendButtonProps?: ButtonProps };
  /**
   * 日历年份控制器
   */
  year?: { visible?: boolean; selectProps?: SelectProps };
}

export interface CalendarCell extends ControllerOptions {
  /**
   * 用于表示日期单元格属于哪一个月份。值为 0 表示是当前日历显示的月份中的日期，值为 -1 表示是上个月的，值为 1 表示是下个月的（日历展示维度是“月”时有值）
   */
  belongTo?: number;
  /**
   * 日历单元格日期
   */
  date?: Date;
  /**
   * 日期单元格对应的星期，值为 1~7，表示周一到周日。（日历展示维度是“月”时有值）
   */
  day?: number;
  /**
   * 日历单元格日期字符串（输出日期的格式和 format 有关）
   * @default ''
   */
  formattedDate?: string;
  /**
   * 日期单元格是否为当前高亮日期或高亮月份
   */
  isCurrent?: boolean;
  /**
   * 日期在本月的第几周（日历展示维度是“月”时有值）
   */
  weekOrder?: number;
}

export interface CalendarWeek {
  day: WeekDay;
}

export type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ControllerOptions {
  filterDate?: Date;
  formattedFilterDate?: string;
  mode?: string;
  isShowWeekend?: boolean;
}
