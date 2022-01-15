import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { useMemo, useState, createElement, useCallback } from 'react';
import { CalendarCell, CalendarProps, WeekDay } from './type';
import { createDateList } from './util';
import { useLocaleReceiver } from '../locale/LocalReceiver';
import type { Config } from '../configProvider';
import defaultLocale from '../locale/zh_CN';

const getDefaultControllerConfigData = (visible = true): Record<string, any> => ({
  visible, // 是否显示（全部控件）
  disabled: false, // 是否禁用（全部控件）
  // 模式切换单选组件设置
  mode: {
    visible: true, // 是否显示
    radioGroupProps: {}, // 用于透传props给该radioGroup组件
  },
  // 年份选择框组件相关设置
  year: {
    visible: true, // 是否显示
    selectProps: { popupProps: { overlayStyle: { width: '110px' } } }, // 用于透传props给该select组件
  },
  // 年份选择框组件相关设置
  month: {
    visible: true, // 是否显示（“year”模式下本身是不显示该组件的）
    selectProps: { popupProps: { overlayStyle: { width: '90px' } } }, // 用于透传props给该select组件
  },
  // 隐藏\显示周末按钮组件相关设置
  weekend: {
    visible: true, // 是否显示
    showWeekendButtonProps: {}, // 用于透传props给显示周末按钮组件
    hideWeekendButtonProps: {}, // 用于透传props给隐藏周末按钮组件
  },
  // “今天\本月”按钮组件相关设置
  current: {
    visible: true, // 是否显示
    currentDayButtonProps: {}, // 用于透传props给“今天”钮组件（“month”模式下有效）
    currentMonthButtonProps: {}, // 用于透传props给“本月”按钮组件（“year”模式下有效）
  },
});

const Calendar = ({
  as = 'div',
  className,
  mode: modeFromProps = 'month',
  value: valueFromProps,
  format = 'YYYY-MM-DD',
  isShowWeekendDefault = true,
  firstDayOfWeek = 1,
  week,
  controllerConfig = true,
  onMonthChange = () => {},
  ...props
}: CalendarProps) => {
  if (!as) {
    as = 'div';
  }

  // 组装配置信息
  const controllerConfigData =
    typeof controllerConfig === 'boolean'
      ? getDefaultControllerConfigData(controllerConfig)
      : { ...getDefaultControllerConfigData(), ...controllerConfig };

  // 读配置信息
  const {
    visible,
    disabled,
    mode: modeFromConfig,
    year: yearFromConfig,
    month: monthFromConfig,
    weekend,
    current,
  } = controllerConfigData;

  const { visible: visibleForMode = true, radioGroupProps: radioGroupPropsForMode = {} } = modeFromConfig;
  const { visible: visibleForYear = true, selectProps: selectPropsForYear = {} } = yearFromConfig;
  const { visible: visibleForMonth = true, selectProps: selectPropsForMonth = {} } = monthFromConfig;
  const { visible: visibleForWeekendToggle = true, showWeekendButtonProps = {}, hideWeekendButtonProps = {} } = weekend;
  const { visible: visibleForCurrent = true, currentDayButtonProps = {}, currentMonthButtonProps = {} } = current;

  const [mode, setMode] = useState('month');
  const [value, setValue] = useState<dayjs.Dayjs>(dayjs(valueFromProps || dayjs().format('YYYY-MM-DD')));
  const [year, setYearState] = useState<number>(value.year());
  const [month, setMonthState] = useState<number>(parseInt(value.format('M'), 10));
  const [isShowWeekend, setIsShowWeekend] = useState<boolean>(isShowWeekendDefault);

  const [local, t] = useLocaleReceiver('calendar' as keyof Config['locale']);

  // 月份年份变更
  const setMonth = useCallback(
    (newMonth) => {
      setMonthState(newMonth);
      onMonthChange({ month: String(newMonth), year: String(year) });
    },
    [onMonthChange, year],
  );
  const setYear = (newYear: number) => {
    setYearState(newYear);
  };

  // 表头数组
  const weekLabelList = t((local as typeof defaultLocale['calendar']).week.split(','));
  const colHeaderList = useMemo((): Array<{ day: WeekDay; text: string }> => {
    if (mode === 'year') return [];
    const weekTextArr = Array.isArray(week) && week.length >= 7 ? week : [...weekLabelList];
    const list = [];
    for (let i = firstDayOfWeek; i <= 7; i++) {
      if (!isShowWeekend && i > 5) {
        break;
      }
      list.push({
        day: i as WeekDay,
        text: weekTextArr[i - 1],
      });
    }
    if (firstDayOfWeek > 1) {
      for (let i = 1; i < firstDayOfWeek; i++) {
        if (!isShowWeekend && i > 5) {
          break;
        }
        list.push({
          day: i as WeekDay,
          text: weekTextArr[i - 1],
        });
      }
    }
    return list;
  }, [mode, firstDayOfWeek, isShowWeekend, week, weekLabelList]);

  // mode为 'month' 时，构造日历列表
  const dateList = useMemo<CalendarCell[][]>(
    () => createDateList(year, month, firstDayOfWeek, value, format),
    [year, month, firstDayOfWeek, format, value],
  );

  return createElement(
    as,
    { className: classNames('ui', 'calendar', className), ...props },
    <div className="calendar">
      <table className="ui celled right aligned unstackable table seven column">
        {colHeaderList.length > 0 && (
          <thead>
            <tr className="center aligned">
              {colHeaderList.map((item, itemIndex) => (
                <th key={itemIndex}>{week && typeof week === 'function' ? week({ day: item.day }) : item.text}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {dateList.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                return (
                  <td
                    key={dayIndex}
                    className={classNames('link', { disabled: day.belongTo !== 0, today: day.isCurrent })}
                  >
                    {day.date?.getDate()}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>,
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
