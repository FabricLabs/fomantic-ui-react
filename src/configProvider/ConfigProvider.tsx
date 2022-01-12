import React from 'react';
import ConfigContext, { defaultContext } from './ConfigContext';
import { ConfigProviderProps } from './type';

const ConfigProvider = ({ children, ...configProps }: ConfigProviderProps) => {
  return <ConfigContext.Provider value={{ ...defaultContext, ...configProps }}>{children}</ConfigContext.Provider>;
};

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
