import { CollectionProps } from '../common';

export interface GridProps extends CollectionProps {
  /**
   * 居中
   */
  centered?: boolean;
  /**
   * 紧凑
   */
  compact?: boolean | 'very';
  /**
   * 宽松
   */
  relaxed?: boolean | 'very';
  /**
   * 填充
   */
  padded?: boolean | 'vertically' | 'horizontally';
  /**
   * 单元格
   */
  celled?: boolean | 'internally';
  /**
   * 分割线
   */
  divided?: boolean | 'vertically';
  /**
   * 列数
   */
  columns?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 'one'
    | 'tow'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve'
    | 'thirteen'
    | 'fourteen'
    | 'fifteen'
    | 'sixteen'
    | 'equal';
}

export interface GridRowProps extends CollectionProps {
  /**
   * 拉伸
   */
  stretched?: boolean;
  /**
   * 居中
   */
  centered?: boolean;
  /**
   * 颜色
   */
  color?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black';
  /**
   * 列数
   */
  columns?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 'one'
    | 'tow'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve'
    | 'thirteen'
    | 'fourteen'
    | 'fifteen'
    | 'sixteen'
    | 'equal';
}

export interface GridColumnProps extends CollectionProps {
  /**
   * 浮动
   */
  floated?: 'left' | 'right';
  /**
   * 颜色
   */
  color?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black';
  /**
   * 横跨列数
   */
  wide?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 'one'
    | 'tow'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve'
    | 'thirteen'
    | 'fourteen'
    | 'fifteen'
    | 'sixteen';
}
