import { createContext } from 'react';

export interface Config {
  /**
   * 样式文件类型
   */
  styleType: 'css' | 'less';
}

export const defaultContext: Config = {
  styleType: 'css',
};

const ConfigContext = createContext<Config>(defaultContext);

export default ConfigContext;
