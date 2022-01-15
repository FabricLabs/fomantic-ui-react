import { createContext } from 'react';
import defaultLocale from '../locale/zh_CN';

export interface Config {
  /**
   * 组件语言版本
   */
  locale?: typeof defaultLocale;
}

export const defaultContext: Config = {
  locale: defaultLocale,
};

const ConfigContext = createContext<Config>(defaultContext);

export default ConfigContext;
