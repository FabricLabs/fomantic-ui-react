import React from 'react';
import { Locale } from './type';
import { ConfigContext } from '../configProvider';

import type { Config } from '../configProvider';

export interface Placement {
  [propName: string]: string | number;
}

export function useLocaleReceiver<T extends keyof Config['locale']>(
  componentName: T,
  defaultLocale?: Locale[T] | Function,
) {
  const { locale: tdLocale } = React.useContext(ConfigContext);

  // @TODO: Check type of { pattern }
  function transformLocale(pattern: Config['locale'][T], placement?: Placement): string | Array<string> {
    const REGX = /\{\s*([\w-]+)\s*\}/g;

    if (typeof pattern === 'string') {
      if (!placement || !REGX.test(pattern)) return pattern;
      const translated = (pattern as string).replace(REGX, (_, key) => {
        if (placement) return String(placement[key]);
        return '';
      });
      return translated;
    }
    if (Array.isArray(pattern)) {
      return (pattern as []).map((p: string, index) => {
        const translated = p.replace(REGX, (_: string, key: string) => {
          if (placement) return String(placement[index][key]);
          return '';
        });
        return translated;
      });
    }
    if (typeof pattern === 'function') {
      return (pattern as Function)(placement);
    }
    return '';
  }

  /** @TypeA => 确保此参数是属于 tdLocale[componentName] 下的子属性 */
  const componentLocale = React.useMemo<Config['locale'][T] | Function>(() => {
    const locale = defaultLocale || {};
    const connectLocaleByName = tdLocale![componentName];

    const localeFromContext = componentName && tdLocale ? connectLocaleByName : {};

    return {
      ...(typeof locale === 'function' ? (locale as Function)() : locale),
      ...(localeFromContext || {}),
    };
  }, [componentName, defaultLocale, tdLocale]);

  return [componentLocale, transformLocale] as [Config['locale'][T], Function];
}
