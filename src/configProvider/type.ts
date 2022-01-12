import { Config } from './ConfigContext';

export interface ConfigProviderProps extends Config {
  children: React.ReactNode;
}
