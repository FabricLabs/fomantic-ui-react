import { CollectionProps } from '../common';

/* export interface Route {
  path: string;
  breadcrumbName: string;
  children: Omit<Route, 'children'>[];
} */

export interface BreadcrumbProps extends CollectionProps {
  /**
   * 分隔符自定义
   */
  divider?: any;
  /**
   * router 的路由栈信息
   */
  // routes?: Route[];
  /**
   * 路由的参数
   */
  // params?: object;
  /**
   * 自定义链接函数，和 react-router 配置使用
   */
  // itemRender?: (route: Route, params: object, routes: Array<Route>, paths: Array<string>) => React.ReactNode;
  // TODO sections?: [{ key: 'home', content: 'Home', link: true,active: true }]
}

export interface BreadcrumbItemProps extends CollectionProps {
  /**
   *  链接的目的地
   */
  href?: string;
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 链接
   */
  link?: boolean;
}

export interface BreadcrumbDividerProps extends CollectionProps {}
