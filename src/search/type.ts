import { ChangeEventHandler, SyntheticEvent } from 'react';
import { FNode, ModuleProps } from '../common';

export interface LoadingProps {
  /**
   * 双倍
   */
  double?: boolean;
  /**
   * 慢速
   */
  slow?: boolean;
  /**
   * 伸缩
   */
  elastic?: boolean;
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
}

export interface SearchResultProps extends ModuleProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 内容
   */
  content?: FNode;
  /**
   * 图片
   */
  image?: string;
  /**
   * 价格
   */
  price?: string;
  /**
   * 唯一标识符
   */
  id?: number | string;
  /**
   * 渲染结果内容
   */
  renderer?: (props: SearchResultProps) => FNode;
  /**
   * 点击时触发
   */
  onClick?: (event: SyntheticEvent, props: SearchResultProps) => void;
}

export interface SearchResultsProps extends ModuleProps {
  /**
   * 内容
   */
  content?: FNode;
}

export interface SearchCategoryProps extends ModuleProps {
  /**
   * 显示名称
   */
  name?: string;
}

export interface SearchProps extends ModuleProps {
  /**
   * 占位字符
   */
  placeholder?: string;
  /**
   * 图标
   */
  icon?: boolean | 'left';
  /**
   * 加载中
   */
  loading?: boolean | LoadingProps;
  /**
   * 查询结果的最小字符数
   */
  minCharacters?: number;
  /**
   * 按类别排序
   */
  category?: boolean;
  /**
   * 输入的值
   */
  value?: string;
  /**
   * 自动选择第一个结果
   */
  selectFirstResult?: boolean;
  /**
   * 结果集
   */
  results?: SearchResultProps[] | SearchCategoryProps;
  /**
   * 没有结果时显示的消息
   */
  noResultsMessage?: FNode;
  /**
   * “无结果”信息的附加文本
   */
  noResultsDescription?: FNode;
  /**
   * 显示无结果下拉框
   */
  showNoResults?: boolean;
  /**
   * 结果选择时触发
   */
  onResultSelect?: (event: SyntheticEvent, data: SearchResultProps) => void;
  /**
   * 输入更改时调用
   */
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
}
